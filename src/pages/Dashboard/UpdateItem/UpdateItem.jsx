import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();

  const { register, handleSubmit } = useForm();
  //   console.log(item);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async data => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    // console.log(res.data);
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        // reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        subHeading="UPDATE ITEM"
        heading={`Update ${name}`}
      ></SectionTitle>
      <div className="max-w-4xl mx-auto shadow-2xl p-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              {...register('name', { required: true })}
              defaultValue={name}
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
                defaultValue={category}
                {...register('category', { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
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
                {...register('price', { required: true })}
                type="number"
                defaultValue={price}
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
              {...register('recipe', { required: true })}
              defaultValue={recipe}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          {/* file input */}
          <div className="form-control w-full mb-4">
            <input
              {...register('image', { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
            {' '}
            Update Menu Item <FaUtensils></FaUtensils>
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
export default UpdateItem;
