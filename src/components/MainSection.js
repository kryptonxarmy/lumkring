import React from "react";
import gambar from "../img/Produk.jpg";

const MainSection = () => {
  return (
    <div className="flex justify-between items-center overflow-hidden h-screen">
      <div className="w-1/2 h-screen flex justify-center flex-col gap-5 ml-16 mt-10">
        <h1 className="text-7xl text-black" style={{fontFamily : "font-apik"}}>Lumkring</h1>
        <p className="text-regular">
          Selamat Datang di Website Lumkring! <br/> Nikmati sensasi renyah dan gurih dari jajanan Lumpia kering berkualitas tinggi kami. Dibuat dengan bahan-bahan berkualitas dan resep turun-temurun, Lumkring hadir untuk memenuhi kebutuhan camilan Anda
          yang menggoda selera.
        </p>

        <p className="font-bold">Anggota Kelompok : </p>
        <ul>
            <li>- Melda Merdina</li>
            <li>- Dian Setiawati</li>
            <li>- Rere</li>
        </ul>
      </div>
      <div>
        <img src={gambar} alt="Deskripsi gambar" className="h-96" style={{objectfit :'cover'}} />
      </div>
    </div>
  );
};

export default MainSection;
