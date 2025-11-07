'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Share2, Copy, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

export default function ShareOption() {
    const [copied, setCopied] = useState(false);
    const [shareUrl, setShareUrl] = useState('');

    // Use the current URL as the share URL
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            setShareUrl(window.location.href);
        }
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl)
            .then(() => {
                setCopied(true);
                toast.success('URL copied to clipboard');
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                toast.error('Failed to copy URL');
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share User Profile
            </h3>

            <div className="flex gap-2 mb-4">
                <Input
                    value={shareUrl}
                    onChange={(e) => setShareUrl(e.target.value)}
                    className="flex-1"
                    readOnly
                />
                <Button onClick={handleCopy} variant="outline" size="icon">
                    {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
            </div>

            <div className="flex gap-2 justify-center">
                <Button
                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(shareUrl)}`, '_blank')}
                    variant="outline"
                >
                    <svg width="512" height="515" viewBox="0 0 512 515" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M179.034 137.465C183.572 137.651 188.592 137.864 193.361 148.466C196.621 155.714 202.106 169.226 206.476 179.994C209.697 187.929 212.313 194.374 212.989 195.725C214.581 198.909 215.641 202.626 213.519 206.878C213.201 207.514 212.907 208.113 212.627 208.686C211.032 211.942 209.86 214.334 207.159 217.495C206.1 218.731 205.006 220.062 203.911 221.393C201.713 224.067 199.515 226.74 197.607 228.644C194.413 231.819 191.096 235.267 194.81 241.635C198.526 248.009 211.304 268.849 230.231 285.724C250.563 303.853 268.227 311.521 277.197 315.414C278.958 316.179 280.385 316.798 281.43 317.323C287.798 320.507 291.512 319.976 295.226 315.721C298.941 311.475 311.135 297.138 315.381 290.771C319.625 284.397 323.871 285.459 329.707 287.581C335.544 289.703 366.845 305.108 373.213 308.292C374.454 308.912 375.615 309.472 376.691 309.992C381.134 312.136 384.135 313.585 385.417 315.721C387.009 318.384 387.009 331.126 381.703 345.991C376.397 360.858 350.402 375.195 338.728 376.257C337.605 376.359 336.488 376.49 335.339 376.625C324.551 377.894 310.934 379.495 262.327 360.328C202.518 336.741 163.082 278.292 154.934 266.217C154.266 265.226 153.808 264.548 153.567 264.226L153.496 264.131C150.063 259.543 127.57 229.483 127.57 198.378C127.57 169.058 141.982 153.689 148.613 146.617C149.067 146.134 149.483 145.689 149.857 145.282C155.689 138.911 162.588 137.316 166.833 137.316C167.065 137.316 167.298 137.316 167.531 137.316C171.539 137.316 175.527 137.315 179.034 137.465Z" fill="url(#paint0_linear_1_918)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M36.498 381.944C13.8795 343.39 2.05623 299.695 2.05623 254.458C2.05623 114.12 116.691 0 257.028 0C325.398 0 389.141 26.7309 437.462 74.5381C485.269 122.859 512 186.602 512 254.972C512 395.309 397.366 509.43 257.028 509.43C214.361 509.43 172.209 499.149 135.197 478.586L0 514.056L36.498 381.944ZM77.6225 367.55L82.763 375.261L61.1727 453.398L141.365 432.321L149.076 436.948C181.462 456.482 218.988 466.763 257.028 466.763C373.719 466.763 468.819 371.663 468.819 254.972C468.819 198.426 446.715 144.964 406.619 104.867C367.036 65.2851 313.574 43.1807 257.028 43.1807C140.337 43.1807 45.2369 137.767 45.2369 254.972C45.2369 294.554 56.5462 333.623 77.6225 367.55Z" fill="url(#paint1_linear_1_918)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_918" x1="0" y1="257.056" x2="512" y2="257.056" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#20B038" />
                                <stop offset="1" stopColor="#60D66A" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1_918" x1="0" y1="257.056" x2="512" y2="257.056" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#20B038" />
                                <stop offset="1" stopColor="#60D66A" />
                            </linearGradient>
                        </defs>
                    </svg>

                    WhatsApp
                </Button>
                <Button
                    onClick={() => window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`, '_blank')}
                    variant="outline"
                >
                    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M512 256C512 397.385 397.385 512 256 512C114.615 512 0 397.385 0 256C0 114.615 114.615 0 256 0C397.385 0 512 114.615 512 256ZM265.174 188.991C240.274 199.347 190.509 220.783 115.88 253.298C103.762 258.117 97.4133 262.831 96.8354 267.441C95.8588 275.232 105.615 278.3 118.901 282.477C120.708 283.046 122.58 283.635 124.5 284.259C137.571 288.507 155.153 293.478 164.294 293.676C172.585 293.855 181.839 290.436 192.056 283.421C261.785 236.352 297.779 212.561 300.038 212.048C301.633 211.687 303.842 211.232 305.339 212.562C306.836 213.893 306.689 216.412 306.53 217.088C305.563 221.208 267.267 256.812 247.448 275.238C241.269 280.982 236.887 285.057 235.991 285.987C233.984 288.072 231.939 290.043 229.973 291.938C217.83 303.645 208.723 312.423 230.477 326.758C240.93 333.647 249.295 339.344 257.64 345.027C266.755 351.234 275.846 357.424 287.608 365.134C290.604 367.099 293.466 369.139 296.254 371.126C306.86 378.688 316.389 385.481 328.162 384.398C335.002 383.768 342.068 377.336 345.657 358.152C354.138 312.814 370.808 214.58 374.66 174.101C374.998 170.554 374.573 166.015 374.232 164.023C373.891 162.031 373.179 159.192 370.589 157.09C367.522 154.601 362.787 154.077 360.669 154.114C351.04 154.283 336.268 159.42 265.174 188.991Z" fill="url(#paint0_linear_1_909)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_909" x1="256" y1="0" x2="256" y2="508.203" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#2AABEE" />
                                <stop offset="1" stopColor="#229ED9" />
                            </linearGradient>
                        </defs>
                    </svg>

                    Telegram
                </Button>
            </div>
        </div>
    )
}
