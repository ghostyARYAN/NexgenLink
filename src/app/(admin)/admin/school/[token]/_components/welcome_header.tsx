import Link from 'next/link'
import React from 'react'

export default function WelcomeHeader({ session, name, state, pincode }: { session: any; name: string; state?: string; pincode?: string }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Welcome Header */}
            <div className="p-6 bg-gray-50">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                        {session.user?.image ? (
                            <img
                                src={session.user.image}
                                alt="Avatar"
                                className="w-12 h-12 rounded-full"
                            />
                        ) : (
                            <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg">
                                {(session.user?.name || "U")[0].toUpperCase()}
                            </div>
                        )}
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">
                            Welcome, {session.user?.name ?? "User"}
                        </h1>
                        <p className="text-sm text-gray-600">
                            {name} • {state} • {pincode}
                        </p>
                    </div>
                </div>
            </div>

            {/* School Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 border-t border-gray-200">
                <div className="p-3 bg-gray-50 rounded flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                        <div className="text-sm text-gray-500">Students</div>
                        <div className="text-lg font-bold">1,248</div>
                    </div>
                </div>

                <div className="p-3 bg-gray-50 rounded flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <div>
                        <div className="text-sm text-gray-500">Classes</div>
                        <div className="text-lg font-bold">34</div>
                    </div>
                </div>

                <div className="p-3 bg-gray-50 rounded flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                        <div className="text-sm text-gray-500">Teachers</div>
                        <div className="text-lg font-bold">86</div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 border-t border-gray-200">
                <h2 className="text-lg font-medium mb-3">Quick Actions</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Link href="#" className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100">
                        <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        <span className="text-sm">Add Student</span>
                    </Link>

                    <Link href="#" className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span className="text-sm">Attendance</span>
                    </Link>

                    <Link href="#" className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100">
                        <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="text-sm">Reports</span>
                    </Link>

                    <Link href="#" className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100">
                        <svg className="w-5 h-5 text-rose-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="text-sm">Notifications</span>
                    </Link>
                </div>
            </div >
        </div >
    )
}
