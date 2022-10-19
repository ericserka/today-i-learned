# this is the module responsible for listening to the notifications that postgres sends
# it should be put in the childrens list in the application.ex file of your phoenix application: children = [..., MyApp.DatabaseListener.Listener, ...]

defmodule MyApp.DatabaseListener.Listener do
  use GenServer
  alias Postgrex.Notifications
  @channel "table_changes"
  import Jason, only: [decode!: 1]

  defstruct [:ref, :pid]

  @doc """
  Initialize the GenServer
  """
  def start_link(_), do: GenServer.start_link(__MODULE__, nil, name: __MODULE__)

  @doc """
  When the GenServer starts subscribe to the given channel
  """
  def init(_) do
    {:ok, pid} = Notifications.start_link(MyApp.Repo.config())
    ref = Notifications.listen!(pid, @channel)
    {:ok, %__MODULE__{pid: pid, ref: ref}}
  end

  @doc """
  Listen for changes
  """
  def handle_info({:notification, pid, ref, @channel, payload}, %{ref: ref, pid: pid} = state) do
    # decode! Parses a JSON value from string input (payload in that case)
    change = decode!(payload)

    IO.inspect(change)

    # change["type"]: what crud operation it is
    # change["table"]: what table it was done on
    # change["schema"]: what schema it was done on
    # change["id"]: the ID of the row, but will also be in the old and new row data
    # change["new_row_data"]: the new data either inserted or updated on the row, or nil in case of delete
    # change["old_row_data"]: the old data that use to be on the row, or nil in case of insert

    # you can take the content of this change variable and do whatever you want below this line

    {:noreply, state}
  end

  def terminate(_reason, %{ref: ref, pid: pid}) do
    Notifications.unlisten!(pid, ref)
    :ok
  end
end
