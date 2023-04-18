import CreateCustomer from "../components/createCustomerForm";
import Header from "../components/header";

function UserRegister() {
  return (
    <section>
      <Header />
      <div>
        <CreateCustomer />
      </div>
    </section>
  );
}

export default UserRegister;