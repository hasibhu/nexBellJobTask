import React from 'react';
import Swal from 'sweetalert2';

const TableRow = ({ data }) => {
    console.log(data);
    const { images, title, brand } = data;


    const handleDelete = () => [
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
            });
        }
        })
    ]
    return (
        <tbody>
      {/* row 1 */}
      <tr className='text-center'>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                                    src={images}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{brand}</div>
              
            </div>
          </div>
        </td>
        <td>
          {title}
          
        </td>
        
        
                <td>
                    <button className="btn bg-blue-500">Update</button>
                    <button  onClick={handleDelete} className="btn bg-red-600 ">Delete</button>
                </td>
        
      </tr>
      
    
    </tbody>
    );
};

export default TableRow;