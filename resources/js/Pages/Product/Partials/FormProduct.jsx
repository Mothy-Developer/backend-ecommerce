import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function FormProduct({ data, submitHandler, handleChange, user, category, submit }) {

    console.log(data);
    console.log(user);
    console.log(category);

    return (
        <div className="mt-4">
            <div className="py-4">
                <form onSubmit={submitHandler}>
                    <div className="mb-5">
                        <InputLabel value="Product Name"/>
                        <TextInput className="mt-2 w-full rounded-lg" placeholder="Product Name" type="text" name="product_name" value={data.name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Product Owner"/>
                        <TextInput className="mt-2 w-full rounded-lg" placeholder="Product Owner" type="text" name="product_owner" value={user.find(it => data.users_id == it.id).name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Product Price"/>
                        <TextInput className="mt-2 w-full rounded-lg" placeholder="Product Price" type="text" name="phone_price" value={data.price} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Product Description"/>
                        <textarea className="resize-none mt-2 w-full h-32 rounded-lg" placeholder="Product Description" type="text" name="product_description" value={data.description} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Product Stock"/>
                        <TextInput className="mt-2 w-full rounded-lg" placeholder="Product Stock" type="text" name="product_stock" value={data.stock} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Product Status"/>
                        <select className="w-full rounded-lg" name="role_id" onChange={handleChange}>
                            <option>Choose a Status</option>
                            <option>Stok Tersedia</option>
                            <option>Stok Habis</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <InputLabel value="Product Category"/>
                        <select className="w-full rounded-lg" name="category_id" value={data.categories_id} onChange={handleChange}>
                            <option>Choose a Category</option>
                            {category.map(categories => <option key={categories.id}>{categories.name}</option>)}
                        </select>
                    </div>
                    <PrimaryButton className="mt-2">{submit}</PrimaryButton>
                </form>
            </div>
        </div>
    )
}