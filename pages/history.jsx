import React from 'react'

export default function history() {
    return (
        <div className="md:container md:mx-auto px-6">
            <h3 className="font-bold text-2xl mb-6 mt-6">Keranjang</h3>

            <div className="bg-white px-4 shadow-lg rounded-lg mb-6">
                <div className="py-4 border-b border-gray-200 flex gap-6">
                    <div className="w-24 md:w-48 h-38 md:h-42 rounded-xl bg-gray-300"></div>
                    <div className="">
                        <small>Pembelian</small>
                        <h3 className="text-lg font-bold mb-1">Kelas Business Plan</h3>
                        
                        <p className="text-green-500">Pembayaran terverifikasi</p>
                    </div>
                </div>

                <div className="text-right py-2">
                    <small className="text-defocused">Total</small>
                    <h3 className="font-bold text-xl">Rp 80.000</h3>
                </div>
            </div>

            <div className="bg-white px-4 shadow-lg rounded-lg mb-6">
                <div className="py-4 border-b border-gray-200 flex gap-6">
                    <div className="w-24 md:w-48 h-38 md:h-42 rounded-xl bg-gray-300"></div>
                    <div className="">
                        <small>Pembelian</small>
                        <h3 className="text-lg font-bold mb-1">Kelas Business Plan</h3>
                        
                        <p className="text-blue-600">Menunggu konfirmasi</p>
                    </div>
                </div>

                <div className="text-right py-2">
                    <small className="text-defocused">Total</small>
                    <h3 className="font-bold text-xl">Rp 80.000</h3>
                </div>
            </div>

            <div className="bg-white px-4 shadow-lg rounded-lg mb-6">
                <div className="py-4 border-b border-gray-200 flex gap-6">
                    <div className="w-24 md:w-48 h-38 md:h-42 rounded-xl bg-gray-300"></div>
                    <div className="">
                        <small>Pembelian</small>
                        <h3 className="text-lg font-bold mb-1">Kelas Business Plan</h3>
                        
                        <p className="text-red-600">Transaksi dibatalkan</p>
                    </div>
                </div>

                <div className="text-right py-2">
                    <small className="text-defocused">Total</small>
                    <h3 className="font-bold text-xl">Rp 80.000</h3>
                </div>
            </div>
        </div>
    )
}
