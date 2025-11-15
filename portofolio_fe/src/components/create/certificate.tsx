// function Certificate() {
//   return (
//     <>
//       <div className="bg-slate-200 text-black py-10 px-96 flex flex-col justify-center items-center gap-4">
//         <h1 className="font-bold text-4xl">Your Certificate</h1>

//         <div className="flex justify-between gap-4">
//           <div>
//             <label className="font-bold">Certificate name</label>
//             <input type="text" className="w-full rounded-md p-2 shadow-xl" />
//           </div>
//           <div>
//             <label className="font-bold">Certificate description</label>
//             <textarea className="w-full rounded-md p-2 shadow-xl"></textarea>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Certificate;

type CertificateItem = {
  nama_certificate: string;
  desk_certificate: string;
};

interface CertificateProps {
  certificates: CertificateItem[];
  setCertificates: React.Dispatch<React.SetStateAction<CertificateItem[]>>;
  addCertificate: () => void;
}

function Certificate({ certificates, setCertificates, addCertificate }: CertificateProps) {
  const handleChange = (
    index: number,
    field: keyof CertificateItem,
    value: string
  ) => {
    const updated = [...certificates];
    updated[index][field] = value as never;
    setCertificates(updated);
  };

  return (
    <div className="bg-white py-10 px-96 flex flex-col gap-4">
      <h1 className="font-bold text-4xl text-center">Your Certificate</h1>

      {certificates.map((item, i) => (
        <div key={i} className="flex gap-4">
          <div>
            <label className="font-bold">Certificate name</label>
            <input
              type="text"
              value={item.nama_certificate}
              onChange={(e) =>
                handleChange(i, "nama_certificate", e.target.value)
              }
              className="bg-slate-300 w-full rounded-md p-2 shadow-xl"
              required
            />
          </div>

          <div>
            <label className="font-bold">Certificate description</label>
            <textarea
              value={item.desk_certificate}
              onChange={(e) =>
                handleChange(i, "desk_certificate", e.target.value)
              }
              className="bg-slate-300 w-full rounded-md p-2 shadow-xl"
              required
            ></textarea>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addCertificate}
        className="px-4 py-2 bg-slate-500 text-white rounded-md mt-2"
      >
        Add more Certificate
      </button>
    </div>
  );
}

export default Certificate;
