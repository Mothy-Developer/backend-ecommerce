import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function FormUser({ data, submitHandler, handleChange, roles, submit}) {
    return (
        <div className="mt-4">
            <div className="py-4">
                <form onSubmit={submitHandler}>
                    <div className="mb-5">
                        <InputLabel value="Name"/>
                        <TextInput className="mt-2 w-full rounded-lg" placeholder="Name" type="text" name="name" value={data.name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Email"/>
                        <TextInput className="mt-2 w-full rounded-lg" placeholder="Email" type="text" name="email" value={data.email} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Address"/>
                        <textarea className="resize-none mt-2 w-full h-32 rounded-lg" placeholder="Address" type="text" name="address" value={data.address} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Phone Number"/>
                        <TextInput className="mt-2 w-full rounded-lg" placeholder="Phone Number" type="text" name="phone_number" value={data.phone_number} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Wallet"/>
                        <TextInput className="mt-2 w-full rounded-lg" placeholder="Wallet" type="text" name="wallet" value={data.wallet} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Store Name"/>
                        <TextInput className="mt-2 w-full rounded-lg" placeholder="Store Name" type="text" name="store_name" value={data.store_name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Roles"/>
                        <select className="w-full rounded-lg" name="role_id" value={data.role_id} onChange={handleChange}>
                            <option>Choose a role</option>
                            {roles.map(role => <option key={role.id} value={role.id}>{role.name}</option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Password"/>
                        <TextInput className="mt-2 w-full rounded-lg" placeholder="Password" type="password" name="password" value={data.password} onChange={handleChange}/>
                    </div>
                    <PrimaryButton className="mt-2">{submit}</PrimaryButton>
                </form>
            </div>
        </div>
    )
}