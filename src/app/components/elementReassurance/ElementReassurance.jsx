import React from 'react'
import Image from 'next/image'

function ElementReassurance() {
  return (
    <div className='text-center p-15'>
    <div className="flex flex-wrap justify-center gap-5 px-5 py-10 rounded-xl">
      <div className="border border-gray-300 p-3 flex flex-col gap-4 w-80">
        <h3 className="text-xl font-semibold">Livraison rapide</h3>
        <div className="flex justify-center">
          <Image src="/assets/images/livraison.jpg" alt="livraison" width={150} height={0} />
        </div>
      </div>
      <div className="border border-gray-300 p-3 flex flex-col gap-4 w-80">
        <h3 className="text-xl font-semibold">Paiement sécurisé</h3>
        <div className="flex justify-center">
          <Image src="/assets/images/pay.jpg" alt="payement" width={150} height={0} className="flex justify-end"/>
        </div>
      </div>
      <div className="border border-gray-300 p-3 flex flex-col gap-4 w-80">
        <h3 className="text-xl font-semibold">Cadeau original</h3>
        <div className="flex justify-center">
          <Image src="/assets/images/gift.png" alt="cadeau" width={150} height={0} className="flex justify-end"/>
        </div>
      </div>
      <div className="border border-gray-300 p-3 flex flex-col gap-4 w-80">
        <h3 className="text-xl font-semibold">Produit <br /> éco-responsable</h3>
        <div className="flex justify-center">
          <Image src="/assets/images/green.jpg" alt="produit" width={150} height={0} className="flex justify-end"/>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default ElementReassurance