// needs experimentalDecorators and emitDecoratorMetadata compiler options to work properly, plus reflect-metadata dependency

interface Contact {
  id: number
}

const currentUser = {
  id: 1234,
  roles: ['ContactEditor', 'ContactViewer'],
  isAuthenticated(): boolean {
    return true
  },
  isInRole(role: string): boolean {
    return this.roles.includes(role)
  },
}

// method decorator
function authorize(role: string) {
  return function authorizeDecorator(
    target: any,
    property: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('target', target, 'property', property)
    const wrapped = descriptor.value

    descriptor.value = function () {
      if (!currentUser.isAuthenticated()) {
        throw Error('User is not authenticated')
      }
      if (!currentUser.isInRole(role)) {
        throw Error(`User not in role ${role}`)
      }

      return wrapped.apply(this, arguments)
    }
  }
}

// class decorator

function singleton<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class Singleton extends constructor {
    static _instance = null

    constructor(...args) {
      super(...args)
      if (Singleton._instance) {
        throw Error('Duplicate instance')
      }

      Singleton._instance = this
    }
  }
}

// property decorator

function auditable(target: object, key: string | symbol) {
  // get the initial value, before the decorator is applied
  let val = target[key]

  // then overwrite the property with a custom getter and setter
  Object.defineProperty(target, key, {
    get: () => val,
    set: (newVal) => {
      console.log(`${key.toString()} changed: `, newVal)
      val = newVal
    },
    enumerable: true,
    configurable: true,
  })
}

@singleton
class ContactRepository {
  @auditable
  private contacts: Contact[] = []

  @authorize('ContactViewer')
  getContactById(id: number): Contact | null {
    const contact = this.contacts.find((x) => x.id === id)
    return contact
  }

  @authorize('ContactEditor')
  save(contact: Contact): void {
    const existing = this.getContactById(contact.id)

    if (existing) {
      Object.assign(existing, contact)
    } else {
      this.contacts.push(contact)
    }
  }
}

const contact = new ContactRepository()

console.log('contact.save({ id: 1 })', contact.save({ id: 1 }))
console.log('contact.getContactById(1)', contact.getContactById(1))
