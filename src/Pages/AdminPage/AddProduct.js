import React from 'react'
import { Card, Input, Button, Typography, Textarea, Select, Option } from "@material-tailwind/react";
import { useFormik } from 'formik';



const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      product_name: '',
      product_detail: '',
      product_price: '',
      product_image: null,
      brand: '',
      category: '',
      countInStock: '',
      preview: '',
    },
    onSubmit: async (val) => {
      let formData = new FormData();
      formData.append('product_name', val.product_name);
      formData.append('product_detail', val.product_detail);
      formData.append('product_price', Number(val.product_price));
      formData.append('product_image', val.product_image);
      formData.append('brand', val.brand);
      formData.append('category', val.category);
      formData.append('countInStock', Number(val.countInStock));



    },

  });
  return (
    <div className='max-w-sm mt-[15px]  mx-auto pb-4 '>
      <div>
        <Card className='place-self-center' color="transparent" shadow={false} >
          <Typography variant="h4" color="blue-gray">
            Add Product
          </Typography>
          <form onSubmit={formik.handleSubmit} className="mt-5 mb-2 ">
            <div className="space-y-7 flex flex-col ">
              <div>
                <Input
                  name='product_name'
                  id='product_name'
                  type='text'
                  onChange={formik.handleChange}
                  value={formik.values.product_name}
                  size="lg" label="Name" />
                {formik.errors.product_name && formik.touched.product_name ? <h1 className='mt-2 text-red-600'>{formik.errors.product_name}</h1> : null}

              </div>

              <div>
                <Input
                  name='product_price'
                  id='product_price'
                  type='number'
                  onChange={formik.handleChange}
                  value={formik.values.product_price}
                  size="lg" label="Price" />
                {formik.errors.product_price && formik.touched.product_price ? <h1 className='mt-2 text-red-600'>{formik.errors.product_price}</h1> : null}
              </div>


              {/* <div>
                <p>Select an Image</p>
                <input
                  name='product_image'
                  onChange={(e) => {
                    const file = e.currentTarget.files[0];
                    formik.setFieldValue('product_image', file);
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.addEventListener('load', () => {
                      formik.setFieldValue('preview', reader.result);
                    })
                  }} type="file" />
                {formik.errors.product_image && formik.touched.product_image ? <h1 className='mt-2 text-red-600'>{formik.errors.product_image}</h1> : null}
                <div className='border border-gray-600 h-[150px] my-1 w-full'>
                  {formik.values.preview !== null && <img src={formik.values.preview} alt="" className='object-cover h-full w-full' />}
                </div>
              </div> */}




              <div className="w-72">
                <Select label="Select Category" name='category' onChange={(e) => formik.setFieldValue('category', e)}>
                  <Option value='sports'>Sports</Option>
                  <Option value='clothes'>Clothes</Option>
                  <Option value='tech'>Tech</Option>
                  <Option value='games'>Games</Option>
                  <Option value='fruits'>Fruits</Option>
                  <Option value='Fruit Juice'>Fruit Juice</Option>
                  <Option value='beauty products'>Beauty Products</Option>
                </Select>
              </div>



              <div>
                <Input
                  name='unit'
                  id='unit'
                  type='number'
                  onChange={formik.handleChange}
                  value={formik.values.countInStock}
                  size="lg" label="unit" />
                {formik.errors.countInStock && formik.touched.countInStock ? <h1 className='mt-2 text-red-600'>{formik.errors.countInStock}</h1> : null}
              </div>


              {

                <Button type='submit' className="mt-6" fullWidth>
                  Submit
                </Button>}

            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default AddProduct
