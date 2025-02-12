import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="relative">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-950" />
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />
            <div className="absolute right-0 bottom-0 -mb-8 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute left-0 bottom-0 -mb-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Bottom area */}
                    <div className="md:flex md:items-center md:justify-between">
                        {/* Social links */}
                        <ul className="flex items-center justify-center mb-4 md:order-1 md:mb-0 space-x-4">
                            <li>
                                <Link 
                                    href="tel:+37068712334"
                                    className="flex justify-center items-center w-10 h-10 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-orange-500 hover:to-orange-600 text-orange-500 hover:text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/25 group"
                                    aria-label="mobile-phone"
                                >
                                    <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                                        <path d="M13.5 2C13.5 2 15.834 2.212 18.803 5.182C21.773 8.152 21.985 10.485 21.985 10.485M14.207 5.536C14.207 5.536 15.197 5.818 16.682 7.303C18.167 8.788 18.45 9.778 18.45 9.778M15.101 15.027L15.645 15.544V15.544L15.101 15.027ZM15.556 14.548L15.012 14.031V14.031L15.556 14.548ZM17.973 14.212L17.599 14.862H17.599L17.973 14.212ZM19.883 15.312L19.509 15.962L19.883 15.312ZM20.422 18.758L20.966 19.275L20.966 19.275L20.422 18.758ZM19.001 20.254L18.457 19.738L19.001 20.254ZM17.676 20.963L17.75 21.71L17.676 20.963ZM7.815 16.475L8.359 15.959L7.815 16.475ZM3.752 6.926C3.73 6.512 3.376 6.195 2.963 6.217C2.549 6.239 2.232 6.593 2.254 7.006L3.752 6.926ZM9.191 8.805L9.735 9.322L9.191 8.805ZM9.478 8.503L10.021 9.02L9.478 8.503ZM9.634 5.693L10.247 5.26L9.634 5.693ZM8.373 3.91L7.761 4.343V4.343L8.373 3.91ZM4.718 3.092C4.432 3.392 4.445 3.867 4.745 4.152C5.045 4.438 5.52 4.425 5.805 4.125L4.718 3.092ZM11.063 13.056L11.607 12.539L11.063 13.056ZM10.664 19.812C11.015 20.033 11.478 19.927 11.698 19.576C11.919 19.226 11.813 18.763 11.462 18.542L10.664 19.812ZM15.113 20.058C14.708 19.974 14.31 20.233 14.225 20.639C14.14 21.044 14.4 21.442 14.806 21.527L15.113 20.058ZM15.645 15.544L16.1 15.064L15.012 14.031L14.557 14.511L15.645 15.544ZM17.599 14.862L19.509 15.962L20.258 14.662L18.347 13.562L17.599 14.862ZM19.878 18.242L18.457 19.738L19.545 20.771L20.966 19.275L19.878 18.242ZM8.359 15.959C4.483 11.878 3.833 8.436 3.752 6.926L2.254 7.006C2.353 8.855 3.138 12.64 7.272 16.992L8.359 15.959ZM9.735 9.322L10.021 9.02L8.934 7.987L8.647 8.289L9.735 9.322ZM10.247 5.26L8.986 3.477L7.761 4.343L9.022 6.126L10.247 5.26ZM9.191 8.805C8.647 8.289 8.646 8.289 8.646 8.29C8.645 8.29 8.645 8.291 8.644 8.292C8.643 8.293 8.642 8.294 8.641 8.295C8.639 8.297 8.637 8.299 8.635 8.301C8.631 8.306 8.627 8.311 8.622 8.316C8.612 8.327 8.602 8.339 8.591 8.353C8.569 8.381 8.544 8.415 8.518 8.456C8.466 8.538 8.409 8.645 8.361 8.78C8.263 9.055 8.21 9.419 8.277 9.873C8.407 10.765 8.992 11.964 10.519 13.572L11.607 12.539C10.179 11.036 9.828 10.111 9.761 9.655C9.729 9.435 9.761 9.32 9.774 9.283C9.782 9.263 9.786 9.257 9.782 9.264C9.779 9.268 9.775 9.275 9.767 9.284C9.764 9.289 9.759 9.294 9.754 9.301C9.751 9.304 9.748 9.307 9.745 9.311C9.743 9.312 9.742 9.314 9.74 9.316C9.739 9.317 9.738 9.318 9.737 9.319C9.737 9.319 9.736 9.32 9.736 9.32C9.735 9.321 9.735 9.322 9.191 8.805ZM10.519 13.572C12.042 15.176 13.192 15.806 14.07 15.949C14.52 16.022 14.885 15.963 15.161 15.854C15.296 15.801 15.402 15.739 15.482 15.682C15.522 15.654 15.556 15.627 15.583 15.603C15.596 15.591 15.608 15.58 15.618 15.57C15.623 15.565 15.628 15.561 15.632 15.556C15.635 15.554 15.637 15.552 15.639 15.55C15.64 15.549 15.641 15.548 15.642 15.547C15.642 15.546 15.643 15.545 15.643 15.545C15.644 15.544 15.645 15.544 15.101 15.027C14.557 14.511 14.558 14.51 14.558 14.509C14.559 14.509 14.559 14.508 14.56 14.508C14.561 14.507 14.562 14.506 14.562 14.505C14.564 14.503 14.566 14.502 14.568 14.5C14.571 14.497 14.574 14.493 14.577 14.49C14.583 14.485 14.589 14.48 14.593 14.475C14.603 14.467 14.61 14.462 14.615 14.458C14.624 14.452 14.623 14.454 14.61 14.459C14.591 14.467 14.5 14.499 14.31 14.468C13.908 14.403 13.039 14.047 11.607 12.539L10.519 13.572ZM8.986 3.477C7.972 2.043 5.944 1.801 4.718 3.092L5.805 4.125C6.328 3.575 7.249 3.618 7.761 4.343L8.986 3.477ZM18.457 19.738C18.178 20.031 17.886 20.189 17.603 20.217L17.75 21.71C18.497 21.636 19.102 21.237 19.545 20.771L18.457 19.738ZM10.021 9.02C10.989 8.001 11.057 6.407 10.247 5.26L9.022 6.126C9.444 6.723 9.379 7.518 8.934 7.987L10.021 9.02ZM19.509 15.962C20.33 16.435 20.491 17.597 19.878 18.242L20.966 19.275C22.271 17.901 21.89 15.602 20.258 14.662L19.509 15.962ZM16.1 15.064C16.485 14.658 17.086 14.567 17.599 14.862L18.347 13.562C17.249 12.93 15.886 13.111 15.012 14.031L16.1 15.064ZM11.462 18.542C10.479 17.924 9.431 17.088 8.359 15.959L7.272 16.992C8.426 18.207 9.569 19.124 10.664 19.812L11.462 18.542ZM17.603 20.217C17.056 20.271 16.191 20.284 15.113 20.058L14.806 21.527C16.054 21.788 17.074 21.776 17.75 21.71L17.603 20.217Z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="mailto:info@elstyga.lt"
                                    className="flex justify-center items-center w-10 h-10 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-orange-500 hover:to-orange-600 text-orange-500 hover:text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/25 group"
                                    aria-label="email"
                                >
                                    <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    target="_blank" 
                                    href="https://rekvizitai.vz.lt/imone/elstyga/"
                                    className="flex justify-center items-center w-10 h-10 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-orange-500 hover:to-orange-600 text-orange-500 hover:text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/25 group"
                                    aria-label="rekvizitai"
                                >
                                    <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                                        <path d="M12 0L1.5 10.5l1 1L12 2l9.5 9.5 1-1L12 0zM19.5 13v10h-4V16h-7v7h-4V13H3v11h18V13h-1.5zM12 9c.8 0 1.5.7 1.5 1.5S12.8 12 12 12s-1.5-.7-1.5-1.5S11.2 9 12 9z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>

                        {/* Contact info and copyright */}
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-8">
                            <Link
                                href="tel:+37068712334"
                                className="text-lg font-semibold text-orange-500 hover:text-orange-400 transition-colors duration-300"
                                aria-label="mobile-phone"
                            >
                                +370 687 12334
                            </Link>
                            <div className="text-sm text-blue-300">
                                &copy; {new Date().getFullYear()} Elstyga | Visos teisės saugomos
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
