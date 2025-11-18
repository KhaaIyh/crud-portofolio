import { type Certificate } from "../../midleware/certificate.api.ts";

interface CertificateProps {
  certificates: Certificate[];
  setCertificates: React.Dispatch<React.SetStateAction<Certificate[]>>;
  addCertificate: () => void;
}

function Certificate({ certificates, setCertificates }: CertificateProps) {
  const handleChange = (
    index: number,
    field: keyof Certificate,
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
    </div>
  );
}

export default Certificate;
