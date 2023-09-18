// const BookInputComponent = ({field, value, setValue, rows}) => {
//     if(rows==null)
//         rows=1;
//     return ( 
//         <div>
//             <label className="block mb-1 text-customColors-darkBrown">
//                 {field}
//             </label>
//             <textarea
//                 rows={rows}
//                 id={field}
//                 name={field}
//                 placeholder={"Enter the book's " + field}
//                 required
//                 className={`w-full border-2 border-gray-300 text-customColors-darkBrown focus:border-customColors-lightBrown focus:outline-none rounded-md px-3 py-2 mb-4`}
//                 value={value}
//                 onChange={(e) => {
//                     setValue(e.target.value);
//                 }}
//             />
//         </div>
//         );
// }

// export default BookInputComponent;