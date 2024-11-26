import { setIsAdd } from '@/store/StoreAction';
import { StoreContext } from '@/store/StoreContext';
import { X } from 'lucide-react';
import React from 'react';
import ModalWrapper from '../../partials/modals/ModalWrapper';
import SpinnerButton from '../../partials/spinners/SpinnerButton';
import { Form, Formik } from 'formik';
import * as Yup from "Yup"
import { InputText } from '@/helpers/FormInputs';

const ModalAddGenre = () => {
  const {dispatch} = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setIsAdd (false));
  }
  const initVal = {
    genre_title:"",
    
  }
  const  yupSchema =Yup.object({
    genre_title:Yup.string().required("Required"),
    
  })
  return (
    <ModalWrapper>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          console.log(values)
        }}
      >
        {(props) => {
          return (
            <Form>
    <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full rounded-md border border-line">
      <div className="modal-header flex gap-2 p-2 items-center border-b border-line mb-2">
        
        <span className='text-body'>Add Category</span>
      
      <button className='ml-auto border-line' onClick={handleClose}>
        <X/>
        </button>
      </div>
      <div className="modal-body p-2 py-4">
        
          <div className='input-wrap'>
          <InputText 
            label="Title"
            type="text"
            name="genre_title" />
          </div>
        
        <div className=' flex justify-end gap-3 mt-5'>
              <button className='btn btn-info'  type='submit'><SpinnerButton/>Save</button>
              <button className='btn btn-cancel'  type='reset' onClick={handleClose}>Cancel</button>
        </div>
      </div>
    </div>
    </Form>
          );
        }}
      </Formik>
    </ModalWrapper>
  )
}

export default ModalAddGenre