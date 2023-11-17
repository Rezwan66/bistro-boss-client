import { useForm } from 'react-hook-form';
import SectionTitle from '../../../components/SectionTitle';
import { FaUtensils } from 'react-icons/fa';

const AddItems = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle
        subHeading="What's new??"
        heading="ADD AN ITEM"
      ></SectionTitle>
      <div className="max-w-4xl mx-auto shadow-2xl p-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              {...register('name')}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
            />
          </div>
          {/* category+price */}
          <div className="flex gap-6 mb-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register('category')}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register('price')}
                type="number"
                placeholder="price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register('recipe')}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          {/* file input */}
          <div className="form-control w-full mb-4">
            <input
              {...register('image')}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
            {' '}
            Add Item <FaUtensils></FaUtensils>
          </button>
          {/* <input
            className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white"
            type="submit"
          /> */}
        </form>
      </div>
    </div>
  );
};
export default AddItems;
