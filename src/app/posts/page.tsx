import Image from "next/image";
import Nav from "../../components/navbar";
const Posts = () => {
    return(
        <main>
        <div className="font-primary">
          <Nav />
        </div>
  
        <div className="mt-20 mx-5 sm:ml-64">
     
      <div className=" pb-16 p-24  flex ">
          <div className="container">
          <div className="w-full px-4">
              <div className="max-w-xl mx-auto text-center mb-16">
                 
                  <h2 className="font-bold text-slate-600 text-3xl mb-4">Project Terbaru</h2>
                  <p className="font-medium text-md text-slate-600">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, delectus corporis similique consequuntur possimus tempore obcaecati dolorem dignissimos quidem nam voluptates. Voluptatibus expedita, repellat quam dicta animi quae eos quos.
                  </p>
              </div>
          </div>
          <div>
              <div className="w-full px-4 flex flex-wrap justify-center">
                  <div className="mb-12 p-4 md:w-1/2 ">
                      <div className="rounded-md shadow-md overflow-hidden">
                      <Image
            className="h-96 w-full object-cover rounded-lg"
            src="/1p.jpg"
            alt="Bonnie image"
            width={400}
            height={400}
          />
                      </div>
                      <h3 className="font-semibold text-xl text-slate-600 mt-5 mb-3">
                          Website Pemesanan Restoran
                      </h3>
                      <p className="font-medium text-base text-slate-700">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo illo possimus porro, quas, quibusdam aperiam sunt eligendi maiores, reprehenderit aut doloremque !
                      </p>
                  </div>
  
                  <div className="mb-12 p-4 md:w-1/2">
                      <div className="rounded-md shadow-md overflow-hidden">
                      <Image
            className="h-96 w-full object-cover rounded-lg"
            src="/2p.jpg"
            alt="Bonnie image"
            width={400}
            height={400}
          />
                      </div>
                      <h3 className="font-semibold text-xl text-slate-600 mt-5 mb-3">
                          UI Website Accounting
                      </h3>
                      <p className="font-medium text-base text-slate-700">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo illo possimus porro, quas, quibusdam aperiam sunt eligendi maiores, reprehenderit aut doloremque !
                      </p>
                  </div>
  
                  <div className="mb-12 p-4 md:w-1/2">
                      <div className="rounded-md shadow-md overflow-hidden">
                      <Image
            className="h-96 w-full object-cover rounded-lg"
            src="/3p.jpg"
            alt="Bonnie image"
            width={400}
            height={400}
          />
                      </div>
                      <h3 className="font-semibold text-xl text-slate-600 mt-5 mb-3">
                          UI Desktop Peminjaman Gedung
                      </h3>
                      <p className="font-medium text-base text-slate-700">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo illo possimus porro, quas, quibusdam aperiam sunt eligendi maiores, reprehenderit aut doloremque !
                      </p>
                  </div>
  
                  <div className="mb-12 p-4 md:w-1/2">
                      <div className="rounded-md shadow-md overflow-hidden">
                      <Image
            className="h-96 w-full object-cover rounded-lg"
            src="/4p.jpg"
            alt="Bonnie image"
            width={400}
            height={400}
          />
                      </div>
                      <h3 className="font-semibold text-xl text-slate-600 mt-5 mb-3">
                          UI/UX Mobile App E-Commerce
                      </h3>
                      <p className="font-medium text-base text-slate-700">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo illo possimus porro, quas, quibusdam aperiam sunt eligendi maiores, reprehenderit aut doloremque !
                      </p>
                  </div>
              </div>
          </div>
      </div>
      </div>
  
          
        </div>
      </main>
    )
}

export default Posts