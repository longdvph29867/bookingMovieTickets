import React from 'react'
import imageBg from '../../static/bg-app.jpg'

export default function DowloadApp() {
    return (
        <div id='dowload' className="py-28 bg-left bg-contain mt-20" style={{backgroundImage: `url(${imageBg})`}}>
            <div className='container max-w-full mx-auto text-white'>
                <div className='max-w-[960px] px-6 w-full mx-auto flex flex-col md:flex-row items-center '>
                    <div className='md:w-1/2 md:text-left text-center w-full'>
                        <h2 className='text-3xl font-bold mb-5'>Ứng dụng tiện lợi dành cho <br />người yêu điện ảnh</h2>
                        <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                        <a target="_blank"
                            href='https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197'
                            className='px-8 py-4 inline-block text-base font-bold mt-8 mb-5 bg-orange-500 rounded'
                        >App miễn phí - Tải về ngay!</a>
                        <p>
                            TIX có hai phiên bản <a className='underline' target="_blank"
                                href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197">IOS</a> & <a
                                    className='underline' target="_blank"
                                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">Android</a>
                        </p>
                    </div>
                    <div className='md:w-1/2 md:mt-0 mt-8 w-full relative'>
                        <img src="./img/download.png" alt=""
                            className='w-full px-[28%] block relative' />
                        {/*  */}
                        <div className='absolute h-full w-full top-0 left-0 px-[29.2%] pt-[1.5%]'>
                            <div id="default-carousel" className="relative w-full h-full" data-carousel="slide">
                                {/* Carousel wrapper */}
                                <div className="relative h-full overflow-hidden rounded-3xl">
                                    {/* Item 1 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img src="./img/app1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                    </div>
                                    {/* Item 2 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img src="./img/app2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                    </div>
                                    {/* Item 3 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img src="./img/app3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                    </div>
                                    {/* Item 4 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img src="./img/app4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                    </div>
                                    {/* Item 5 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img src="./img/app5.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                    </div>
                                    {/* Item 6 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img src="./img/app6.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
    )
}