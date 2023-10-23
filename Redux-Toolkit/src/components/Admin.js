import { useGetAccountsQuery, useAddAccountsMutation, useDeleteAccountsMutation, useUpdateAccountsMutation } from "../api/admin";

function Admin() {
  const {data, error, isLoading} = useGetAccountsQuery()
  const [addAccount, response] = useAddAccountsMutation()
  const [deleteAccount] = useDeleteAccountsMutation()
  const [updateAccount] = useUpdateAccountsMutation()
  return (
      <div className="card">
        <div className="container">
          <h4>
            <b>Admin Component</b>
          </h4>
          {
            data && data.map((item)=>(
                <p key={item.id}>{item.id}: {item.amount}
                <button onClick={()=> deleteAccount(item.id)}>Delete Account</button>
                <button onClick={()=> updateAccount({id: item.id, amount: 88})}>Update Account</button>
                </p>
            ))
          }
          <button onClick={()=> addAccount(77, data.length + 1)}>Add Account +</button>
        </div>
      </div>
  );
}

export default Admin;
