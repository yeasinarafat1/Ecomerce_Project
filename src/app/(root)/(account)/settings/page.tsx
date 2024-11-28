import AccountDetailsForm from "./AccountDetailsForm";
import AddressForm from "./AddressForm";
import ChangePasswordForm from "./ChangePasswordForm";

const Settings = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full border border-gray-100 h-auto">
        <div className="text-gray-900 font-medium px-5 w-full h-[52px] border-b border-gray-100 flex items-center ">
          Accounts Settings
        </div>
        <AccountDetailsForm />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-2 py-4">
        <AddressForm type="Billing Address" />
        <AddressForm type="Shipping Address" />
      </div>
      <ChangePasswordForm />
    </div>
  );
};

export default Settings;
