export const data: Patient[] = [
    {
        "id": "6a8ea906-6dad-46f9-b1cb-939e3dfbd2c0",
        "name": "Ananya Singh",
        "age": 14,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "IIT Bombay",
            "grade": "3rd Year",
            "rollNumber": "STU2025-2237"
        },
        "guardian": {
            "name": "Vihaan Patel",
            "relation": "Guardian",
            "phone": "+91-8810952679",
            "email": "guardian0@example.com"
        },
        "contact": {
            "email": "user0@example.com",
            "phone": "+91-8254792071"
        },
        "location": {
            "state": "Uttar Pradesh",
            "district": "District-0",
            "city": "Varanasi",
            "pincode": "716678",
            "region": "Urban",
            "coordinates": {
                "lat": 28.2375,
                "lng": 70.2315
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-04T00:00:00",
            "examiner": {
                "name": "Dr. Aarav Das",
                "specialization": "Full Body",
                "institution": "Max Healthcare"
            },
            "details": {
                "height": "149 cm",
                "weight": "86 kg",
                "bloodGroup": "O-",
                "bmi": 16.8,
                "bloodPressure": "128/70",
                "heartRate": 94,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Swimming",
                "Cricket"
            ],
            "screenTimeHours": 2,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-UTTAR PRADESH-000"
    },
    {
        "id": "cb6f362b-2417-455e-9bee-ab3ea79a1700",
        "name": "Vivaan Sharma",
        "age": 13,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "AIIMS Delhi",
            "grade": "2nd Year",
            "rollNumber": "STU2025-8942"
        },
        "guardian": {
            "name": "Meera Mehta",
            "relation": "Mother",
            "phone": "+91-7501432508",
            "email": "guardian1@example.com"
        },
        "contact": {
            "email": "user1@example.com",
            "phone": "+91-8215974318"
        },
        "location": {
            "state": "Tamil Nadu",
            "district": "District-1",
            "city": "Coimbatore",
            "pincode": "193421",
            "region": "Urban",
            "coordinates": {
                "lat": 35.6431,
                "lng": 68.3336
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-15T00:00:00",
            "examiner": {
                "name": "Dr. Aditi Rao",
                "specialization": "Full Body",
                "institution": "Max Healthcare"
            },
            "details": {
                "height": "147 cm",
                "weight": "70 kg",
                "bloodGroup": "B-",
                "bmi": 19.2,
                "bloodPressure": "120/87",
                "heartRate": 89,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Swimming",
                "Basketball"
            ],
            "screenTimeHours": 8,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-TAMIL NADU-001"
    },
    {
        "id": "ef97e922-3a62-43b2-9b0b-604b2c4d58d7",
        "name": "Vivaan Singh",
        "age": 12,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "9th Grade",
            "rollNumber": "STU2025-7164"
        },
        "guardian": {
            "name": "Ananya Sharma",
            "relation": "Father",
            "phone": "+91-7880468036",
            "email": "guardian2@example.com"
        },
        "contact": {
            "email": "user2@example.com",
            "phone": "+91-7829770656"
        },
        "location": {
            "state": "Maharashtra",
            "district": "District-2",
            "city": "Pune",
            "pincode": "390235",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 23.6642,
                "lng": 75.205
            }
        },
        "healthReport": {
            "type": "Neurology",
            "date": "2025-09-03T00:00:00",
            "examiner": {
                "name": "Dr. Aditi Mishra",
                "specialization": "Neurology",
                "institution": "Fortis"
            },
            "details": {
                "stressLevel": "Low",
                "memoryTestScore": 93,
                "sleepQuality": "Good",
                "summary": "Neurological screening completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Football",
                "Running"
            ],
            "screenTimeHours": 4,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-MAHARASHTRA-002"
    },
    {
        "id": "a09d6d4b-077d-4fa6-90bf-e636540c47c2",
        "name": "Aditya Verma",
        "age": 16,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "Delhi Public School",
            "grade": "10th Grade",
            "rollNumber": "STU2025-9750"
        },
        "guardian": {
            "name": "Meera Singh",
            "relation": "Father",
            "phone": "+91-9231080572",
            "email": "guardian3@example.com"
        },
        "contact": {
            "email": "user3@example.com",
            "phone": "+91-7561604762"
        },
        "location": {
            "state": "Kerala",
            "district": "District-3",
            "city": "Thrissur",
            "pincode": "869735",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 11.8001,
                "lng": 72.2745
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-03T00:00:00",
            "examiner": {
                "name": "Dr. Diya Singh",
                "specialization": "Dental",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "cavities": 2,
                "bracesRequired": false,
                "gumHealth": "Average",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Swimming",
                "Basketball"
            ],
            "screenTimeHours": 2,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-KERALA-003"
    },
    {
        "id": "6988be63-6070-4317-84c8-ef679f52f08e",
        "name": "Pooja Sharma",
        "age": 17,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "St. Xavier's College",
            "grade": "10th Grade",
            "rollNumber": "STU2025-3332"
        },
        "guardian": {
            "name": "Pooja Iyer",
            "relation": "Guardian",
            "phone": "+91-8605226916",
            "email": "guardian4@example.com"
        },
        "contact": {
            "email": "user4@example.com",
            "phone": "+91-8292398245"
        },
        "location": {
            "state": "Maharashtra",
            "district": "District-4",
            "city": "Mumbai",
            "pincode": "756331",
            "region": "Urban",
            "coordinates": {
                "lat": 8.5217,
                "lng": 78.4378
            }
        },
        "healthReport": {
            "type": "Neurology",
            "date": "2025-09-06T00:00:00",
            "examiner": {
                "name": "Dr. Aarav Agarwal",
                "specialization": "Neurology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "stressLevel": "High",
                "memoryTestScore": 70,
                "sleepQuality": "Poor",
                "summary": "Neurological screening completed."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Football",
                "Basketball"
            ],
            "screenTimeHours": 7,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-MAHARASHTRA-004"
    },
    {
        "id": "180ed8f4-3daf-415f-868d-4e8df6064455",
        "name": "Ishita Nair",
        "age": 19,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "AIIMS Delhi",
            "grade": "11th Grade",
            "rollNumber": "STU2025-7630"
        },
        "guardian": {
            "name": "Ananya Nair",
            "relation": "Mother",
            "phone": "+91-8861352711",
            "email": "guardian5@example.com"
        },
        "contact": {
            "email": "user5@example.com",
            "phone": "+91-7197807652"
        },
        "location": {
            "state": "Rajasthan",
            "district": "District-5",
            "city": "Ajmer",
            "pincode": "198642",
            "region": "Rural",
            "coordinates": {
                "lat": 36.5088,
                "lng": 88.4951
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-23T00:00:00",
            "examiner": {
                "name": "Dr. Vivaan Yadav",
                "specialization": "Dental",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "cavities": 2,
                "bracesRequired": true,
                "gumHealth": "Needs Attention",
                "summary": "Dental check completed."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Swimming",
                "Badminton"
            ],
            "screenTimeHours": 2,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-RAJASTHAN-005"
    },
    {
        "id": "b0973927-b9ff-49b9-8d5d-ff4ed465e9bc",
        "name": "Riya Yadav",
        "age": 20,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "9th Grade",
            "rollNumber": "STU2025-6794"
        },
        "guardian": {
            "name": "Vihaan Malhotra",
            "relation": "Mother",
            "phone": "+91-9551486358",
            "email": "guardian6@example.com"
        },
        "contact": {
            "email": "user6@example.com",
            "phone": "+91-8196884418"
        },
        "location": {
            "state": "Punjab",
            "district": "District-6",
            "city": "Ludhiana",
            "pincode": "932636",
            "region": "Urban",
            "coordinates": {
                "lat": 23.2091,
                "lng": 84.6726
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-27T00:00:00",
            "examiner": {
                "name": "Dr. Sai Rao",
                "specialization": "Physiology",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "staminaScore": 78,
                "lungCapacity": "3474 ml",
                "flexibilityScore": 71,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Running",
                "Football"
            ],
            "screenTimeHours": 7,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-PUNJAB-006"
    },
    {
        "id": "e96dd93c-8903-4444-868f-34efb67f113d",
        "name": "Aditi Nair",
        "age": 18,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "St. Xavier's College",
            "grade": "1st Year",
            "rollNumber": "STU2025-2213"
        },
        "guardian": {
            "name": "Ananya Verma",
            "relation": "Guardian",
            "phone": "+91-9330413013",
            "email": "guardian7@example.com"
        },
        "contact": {
            "email": "user7@example.com",
            "phone": "+91-7022702250"
        },
        "location": {
            "state": "Punjab",
            "district": "District-7",
            "city": "Amritsar",
            "pincode": "940194",
            "region": "Urban",
            "coordinates": {
                "lat": 30.5772,
                "lng": 92.4352
            }
        },
        "healthReport": {
            "type": "Neurology",
            "date": "2025-09-22T00:00:00",
            "examiner": {
                "name": "Dr. Aditi Rao",
                "specialization": "Neurology",
                "institution": "Fortis"
            },
            "details": {
                "stressLevel": "Low",
                "memoryTestScore": 91,
                "sleepQuality": "Poor",
                "summary": "Neurological screening completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Badminton",
                "Cricket"
            ],
            "screenTimeHours": 6,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-PUNJAB-007"
    },
    {
        "id": "01244260-7e0c-4dd2-b5ac-aa659e1db6a2",
        "name": "Arjun Sharma",
        "age": 17,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "IIT Bombay",
            "grade": "3rd Year",
            "rollNumber": "STU2025-6054"
        },
        "guardian": {
            "name": "Riya Yadav",
            "relation": "Father",
            "phone": "+91-8818605964",
            "email": "guardian8@example.com"
        },
        "contact": {
            "email": "user8@example.com",
            "phone": "+91-9460343339"
        },
        "location": {
            "state": "Uttar Pradesh",
            "district": "District-8",
            "city": "Lucknow",
            "pincode": "745398",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 13.4583,
                "lng": 80.8039
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-27T00:00:00",
            "examiner": {
                "name": "Dr. Vivaan Malhotra",
                "specialization": "Cardiology",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "ecgResult": "Normal",
                "cholesterol": "165 mg/dL",
                "heartRate": 73,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Swimming",
                "Cricket"
            ],
            "screenTimeHours": 8,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-UTTAR PRADESH-008"
    },
    {
        "id": "573458b7-a5da-4ab5-956b-6dd22439f285",
        "name": "Sanya Singh",
        "age": 13,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "AIIMS Delhi",
            "grade": "10th Grade",
            "rollNumber": "STU2025-3054"
        },
        "guardian": {
            "name": "Vihaan Iyer",
            "relation": "Mother",
            "phone": "+91-9621786777",
            "email": "guardian9@example.com"
        },
        "contact": {
            "email": "user9@example.com",
            "phone": "+91-7405706669"
        },
        "location": {
            "state": "Delhi",
            "district": "District-9",
            "city": "Karol Bagh",
            "pincode": "436287",
            "region": "Urban",
            "coordinates": {
                "lat": 18.325,
                "lng": 77.1804
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-22T00:00:00",
            "examiner": {
                "name": "Dr. Sai Yadav",
                "specialization": "Cardiology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "ecgResult": "Irregular",
                "cholesterol": "197 mg/dL",
                "heartRate": 92,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Running",
                "Basketball"
            ],
            "screenTimeHours": 2,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-DELHI-009"
    },
    {
        "id": "1471f6fe-c084-47f6-9bc0-c48322d65ccb",
        "name": "Riya Singh",
        "age": 12,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "NIT Trichy",
            "grade": "2nd Year",
            "rollNumber": "STU2025-2144"
        },
        "guardian": {
            "name": "Sanya Kapoor",
            "relation": "Father",
            "phone": "+91-9274896529",
            "email": "guardian10@example.com"
        },
        "contact": {
            "email": "user10@example.com",
            "phone": "+91-9344425113"
        },
        "location": {
            "state": "Gujarat",
            "district": "District-10",
            "city": "Surat",
            "pincode": "796591",
            "region": "Urban",
            "coordinates": {
                "lat": 33.1356,
                "lng": 96.0694
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-12T00:00:00",
            "examiner": {
                "name": "Dr. Krishna Chopra",
                "specialization": "Physiology",
                "institution": "Max Healthcare"
            },
            "details": {
                "staminaScore": 61,
                "lungCapacity": "3263 ml",
                "flexibilityScore": 51,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Cricket",
                "Swimming"
            ],
            "screenTimeHours": 7,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-GUJARAT-010"
    },
    {
        "id": "3c9703a4-da6f-4e93-9e99-062635dba87d",
        "name": "Krishna Yadav",
        "age": 21,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "AIIMS Delhi",
            "grade": "10th Grade",
            "rollNumber": "STU2025-5085"
        },
        "guardian": {
            "name": "Riya Agarwal",
            "relation": "Father",
            "phone": "+91-7437665165",
            "email": "guardian11@example.com"
        },
        "contact": {
            "email": "user11@example.com",
            "phone": "+91-8633898788"
        },
        "location": {
            "state": "Uttar Pradesh",
            "district": "District-11",
            "city": "Prayagraj",
            "pincode": "613097",
            "region": "Rural",
            "coordinates": {
                "lat": 23.614,
                "lng": 80.8103
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-24T00:00:00",
            "examiner": {
                "name": "Dr. Ananya Verma",
                "specialization": "Full Body",
                "institution": "Fortis"
            },
            "details": {
                "height": "171 cm",
                "weight": "67 kg",
                "bloodGroup": "AB+",
                "bmi": 18.9,
                "bloodPressure": "125/74",
                "heartRate": 100,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Football",
                "Swimming"
            ],
            "screenTimeHours": 7,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-UTTAR PRADESH-011"
    },
    {
        "id": "402bd25c-4253-4906-9285-04d900d012c4",
        "name": "Aditi Chopra",
        "age": 21,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "10th Grade",
            "rollNumber": "STU2025-7756"
        },
        "guardian": {
            "name": "Aditi Malhotra",
            "relation": "Mother",
            "phone": "+91-7885301762",
            "email": "guardian12@example.com"
        },
        "contact": {
            "email": "user12@example.com",
            "phone": "+91-7259438913"
        },
        "location": {
            "state": "Kerala",
            "district": "District-12",
            "city": "Thiruvananthapuram",
            "pincode": "534202",
            "region": "Urban",
            "coordinates": {
                "lat": 29.3787,
                "lng": 83.4835
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-03T00:00:00",
            "examiner": {
                "name": "Dr. Vivaan Mishra",
                "specialization": "Full Body",
                "institution": "Max Healthcare"
            },
            "details": {
                "height": "185 cm",
                "weight": "48 kg",
                "bloodGroup": "A+",
                "bmi": 25.5,
                "bloodPressure": "106/71",
                "heartRate": 64,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Football",
                "Running"
            ],
            "screenTimeHours": 2,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-KERALA-012"
    },
    {
        "id": "6d1da927-85ee-403b-b9d4-36d0b85f6699",
        "name": "Pooja Agarwal",
        "age": 13,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "St. Xavier's College",
            "grade": "10th Grade",
            "rollNumber": "STU2025-7985"
        },
        "guardian": {
            "name": "Ananya Das",
            "relation": "Guardian",
            "phone": "+91-9297951949",
            "email": "guardian13@example.com"
        },
        "contact": {
            "email": "user13@example.com",
            "phone": "+91-8647249928"
        },
        "location": {
            "state": "Karnataka",
            "district": "District-13",
            "city": "Mysuru",
            "pincode": "309113",
            "region": "Rural",
            "coordinates": {
                "lat": 29.7932,
                "lng": 87.5514
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-04T00:00:00",
            "examiner": {
                "name": "Dr. Aditi Chopra",
                "specialization": "Cardiology",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "ecgResult": "Irregular",
                "cholesterol": "241 mg/dL",
                "heartRate": 99,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Badminton",
                "Running"
            ],
            "screenTimeHours": 2,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-KARNATAKA-013"
    },
    {
        "id": "47c1f9ca-ffe3-40ee-b4d0-ee800a1b1495",
        "name": "Vihaan Nair",
        "age": 22,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "NIT Trichy",
            "grade": "9th Grade",
            "rollNumber": "STU2025-4798"
        },
        "guardian": {
            "name": "Arjun Sharma",
            "relation": "Father",
            "phone": "+91-7241937319",
            "email": "guardian14@example.com"
        },
        "contact": {
            "email": "user14@example.com",
            "phone": "+91-8427921100"
        },
        "location": {
            "state": "Punjab",
            "district": "District-14",
            "city": "Bathinda",
            "pincode": "789440",
            "region": "Rural",
            "coordinates": {
                "lat": 31.3079,
                "lng": 96.3978
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-05T00:00:00",
            "examiner": {
                "name": "Dr. Diya Chopra",
                "specialization": "Dental",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "cavities": 3,
                "bracesRequired": false,
                "gumHealth": "Average",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Football",
                "Running"
            ],
            "screenTimeHours": 5,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-PUNJAB-014"
    },
    {
        "id": "271a93cf-ac4f-4ed7-85ee-090d750bbfc9",
        "name": "Meera Agarwal",
        "age": 20,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "9th Grade",
            "rollNumber": "STU2025-8879"
        },
        "guardian": {
            "name": "Diya Patel",
            "relation": "Guardian",
            "phone": "+91-7201338915",
            "email": "guardian15@example.com"
        },
        "contact": {
            "email": "user15@example.com",
            "phone": "+91-7772607624"
        },
        "location": {
            "state": "Uttar Pradesh",
            "district": "District-15",
            "city": "Agra",
            "pincode": "648551",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 34.3014,
                "lng": 90.8855
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-25T00:00:00",
            "examiner": {
                "name": "Dr. Sai Kapoor",
                "specialization": "Cardiology",
                "institution": "Fortis"
            },
            "details": {
                "ecgResult": "Irregular",
                "cholesterol": "209 mg/dL",
                "heartRate": 97,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Cricket",
                "Running"
            ],
            "screenTimeHours": 7,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-UTTAR PRADESH-015"
    },
    {
        "id": "ee37e68d-594f-4e46-ab44-76ff3d9254c1",
        "name": "Sanya Malhotra",
        "age": 20,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "2nd Year",
            "rollNumber": "STU2025-2047"
        },
        "guardian": {
            "name": "Aditi Mehta",
            "relation": "Father",
            "phone": "+91-8993305493",
            "email": "guardian16@example.com"
        },
        "contact": {
            "email": "user16@example.com",
            "phone": "+91-9247812703"
        },
        "location": {
            "state": "Gujarat",
            "district": "District-16",
            "city": "Vadodara",
            "pincode": "349476",
            "region": "Urban",
            "coordinates": {
                "lat": 26.2901,
                "lng": 94.3467
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-22T00:00:00",
            "examiner": {
                "name": "Dr. Ananya Agarwal",
                "specialization": "Full Body",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "height": "162 cm",
                "weight": "79 kg",
                "bloodGroup": "B+",
                "bmi": 19.0,
                "bloodPressure": "101/70",
                "heartRate": 98,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Basketball",
                "Badminton"
            ],
            "screenTimeHours": 6,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-GUJARAT-016"
    },
    {
        "id": "41475832-8c13-42da-9907-164831ae95f2",
        "name": "Meera Patel",
        "age": 14,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "NIT Trichy",
            "grade": "9th Grade",
            "rollNumber": "STU2025-3062"
        },
        "guardian": {
            "name": "Sai Das",
            "relation": "Guardian",
            "phone": "+91-8559143507",
            "email": "guardian17@example.com"
        },
        "contact": {
            "email": "user17@example.com",
            "phone": "+91-9512136812"
        },
        "location": {
            "state": "Karnataka",
            "district": "District-17",
            "city": "Hubballi",
            "pincode": "266088",
            "region": "Urban",
            "coordinates": {
                "lat": 33.249,
                "lng": 86.8289
            }
        },
        "healthReport": {
            "type": "Neurology",
            "date": "2025-09-06T00:00:00",
            "examiner": {
                "name": "Dr. Arjun Yadav",
                "specialization": "Neurology",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "stressLevel": "High",
                "memoryTestScore": 82,
                "sleepQuality": "Good",
                "summary": "Neurological screening completed."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Badminton",
                "Running"
            ],
            "screenTimeHours": 8,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-KARNATAKA-017"
    },
    {
        "id": "5d0fb0e2-0d0c-4add-a8da-41336ff6b47a",
        "name": "Aditi Das",
        "age": 16,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "Delhi Public School",
            "grade": "11th Grade",
            "rollNumber": "STU2025-9645"
        },
        "guardian": {
            "name": "Aditya Singh",
            "relation": "Father",
            "phone": "+91-7896552137",
            "email": "guardian18@example.com"
        },
        "contact": {
            "email": "user18@example.com",
            "phone": "+91-8229925020"
        },
        "location": {
            "state": "West Bengal",
            "district": "District-18",
            "city": "Howrah",
            "pincode": "958336",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 16.7085,
                "lng": 89.0103
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-12T00:00:00",
            "examiner": {
                "name": "Dr. Vivaan Malhotra",
                "specialization": "Cardiology",
                "institution": "Fortis"
            },
            "details": {
                "ecgResult": "Irregular",
                "cholesterol": "231 mg/dL",
                "heartRate": 76,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Badminton",
                "Basketball"
            ],
            "screenTimeHours": 4,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-WEST BENGAL-018"
    },
    {
        "id": "8a13d9bd-50f4-4f2d-89ce-351e5493b1e2",
        "name": "Sai Mishra",
        "age": 20,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "IIT Bombay",
            "grade": "11th Grade",
            "rollNumber": "STU2025-7540"
        },
        "guardian": {
            "name": "Meera Chopra",
            "relation": "Guardian",
            "phone": "+91-9109703313",
            "email": "guardian19@example.com"
        },
        "contact": {
            "email": "user19@example.com",
            "phone": "+91-7951803044"
        },
        "location": {
            "state": "West Bengal",
            "district": "District-19",
            "city": "Asansol",
            "pincode": "310894",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 26.5343,
                "lng": 84.8288
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-26T00:00:00",
            "examiner": {
                "name": "Dr. Vivaan Nair",
                "specialization": "Full Body",
                "institution": "Max Healthcare"
            },
            "details": {
                "height": "181 cm",
                "weight": "76 kg",
                "bloodGroup": "AB+",
                "bmi": 19.4,
                "bloodPressure": "100/65",
                "heartRate": 100,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Running",
                "Swimming"
            ],
            "screenTimeHours": 6,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-WEST BENGAL-019"
    },
    {
        "id": "1a3f972a-6e22-4a3d-bf56-9bad09f56563",
        "name": "Pooja Nair",
        "age": 15,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "Delhi Public School",
            "grade": "9th Grade",
            "rollNumber": "STU2025-1644"
        },
        "guardian": {
            "name": "Aditya Iyer",
            "relation": "Father",
            "phone": "+91-9191297071",
            "email": "guardian20@example.com"
        },
        "contact": {
            "email": "user20@example.com",
            "phone": "+91-8227340066"
        },
        "location": {
            "state": "Punjab",
            "district": "District-20",
            "city": "Jalandhar",
            "pincode": "461345",
            "region": "Rural",
            "coordinates": {
                "lat": 35.9238,
                "lng": 87.0982
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-04T00:00:00",
            "examiner": {
                "name": "Dr. Meera Patel",
                "specialization": "Optical",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "visionLeft": "6/9",
                "visionRight": "6/12",
                "spectaclesRequired": true,
                "colorBlindness": false,
                "summary": "Optical examination done."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Running",
                "Swimming"
            ],
            "screenTimeHours": 8,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-PUNJAB-020"
    },
    {
        "id": "cdccd3ca-9862-4c93-8154-bc8dbe57d9d6",
        "name": "Pooja Nair",
        "age": 20,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "10th Grade",
            "rollNumber": "STU2025-8812"
        },
        "guardian": {
            "name": "Meera Agarwal",
            "relation": "Mother",
            "phone": "+91-7643602246",
            "email": "guardian21@example.com"
        },
        "contact": {
            "email": "user21@example.com",
            "phone": "+91-7071085479"
        },
        "location": {
            "state": "Punjab",
            "district": "District-21",
            "city": "Patiala",
            "pincode": "717921",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 20.5506,
                "lng": 68.013
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-11T00:00:00",
            "examiner": {
                "name": "Dr. Aditi Yadav",
                "specialization": "Full Body",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "height": "154 cm",
                "weight": "80 kg",
                "bloodGroup": "B-",
                "bmi": 23.0,
                "bloodPressure": "107/82",
                "heartRate": 69,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Football",
                "Basketball"
            ],
            "screenTimeHours": 5,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-PUNJAB-021"
    },
    {
        "id": "0293efaa-3169-4bec-ad45-0cd8ddf4334b",
        "name": "Aditya Agarwal",
        "age": 16,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "IIT Bombay",
            "grade": "2nd Year",
            "rollNumber": "STU2025-6910"
        },
        "guardian": {
            "name": "Sanya Chopra",
            "relation": "Father",
            "phone": "+91-7756390751",
            "email": "guardian22@example.com"
        },
        "contact": {
            "email": "user22@example.com",
            "phone": "+91-8595228338"
        },
        "location": {
            "state": "Rajasthan",
            "district": "District-22",
            "city": "Jodhpur",
            "pincode": "517069",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 23.8677,
                "lng": 79.6777
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-27T00:00:00",
            "examiner": {
                "name": "Dr. Sai Singh",
                "specialization": "Optical",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "visionLeft": "6/9",
                "visionRight": "6/6",
                "spectaclesRequired": true,
                "colorBlindness": false,
                "summary": "Optical examination done."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Basketball",
                "Badminton"
            ],
            "screenTimeHours": 2,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-RAJASTHAN-022"
    },
    {
        "id": "4b7a2d1a-178c-47e9-8309-f4475d36c490",
        "name": "Vihaan Malhotra",
        "age": 18,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "3rd Year",
            "rollNumber": "STU2025-6866"
        },
        "guardian": {
            "name": "Aditya Sharma",
            "relation": "Guardian",
            "phone": "+91-8745694083",
            "email": "guardian23@example.com"
        },
        "contact": {
            "email": "user23@example.com",
            "phone": "+91-8327034679"
        },
        "location": {
            "state": "Karnataka",
            "district": "District-23",
            "city": "Belagavi",
            "pincode": "206074",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 12.103,
                "lng": 68.0769
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-30T00:00:00",
            "examiner": {
                "name": "Dr. Meera Das",
                "specialization": "Dental",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "cavities": 3,
                "bracesRequired": false,
                "gumHealth": "Good",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Running",
                "Swimming"
            ],
            "screenTimeHours": 2,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-KARNATAKA-023"
    },
    {
        "id": "f67e679b-1812-4a3e-a006-00c59beedc69",
        "name": "Ananya Patel",
        "age": 20,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "AIIMS Delhi",
            "grade": "10th Grade",
            "rollNumber": "STU2025-9266"
        },
        "guardian": {
            "name": "Riya Iyer",
            "relation": "Guardian",
            "phone": "+91-8033892984",
            "email": "guardian24@example.com"
        },
        "contact": {
            "email": "user24@example.com",
            "phone": "+91-9889242009"
        },
        "location": {
            "state": "Tamil Nadu",
            "district": "District-24",
            "city": "Salem",
            "pincode": "684569",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 13.3199,
                "lng": 68.2811
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-18T00:00:00",
            "examiner": {
                "name": "Dr. Sanya Sharma",
                "specialization": "Full Body",
                "institution": "Max Healthcare"
            },
            "details": {
                "height": "158 cm",
                "weight": "42 kg",
                "bloodGroup": "A+",
                "bmi": 21.0,
                "bloodPressure": "107/80",
                "heartRate": 96,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Badminton",
                "Running"
            ],
            "screenTimeHours": 2,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-TAMIL NADU-024"
    },
    {
        "id": "1c107d5b-0fcf-4ea5-a05f-2b7fc21c4bd0",
        "name": "Vihaan Singh",
        "age": 19,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "Delhi Public School",
            "grade": "2nd Year",
            "rollNumber": "STU2025-4611"
        },
        "guardian": {
            "name": "Krishna Rao",
            "relation": "Mother",
            "phone": "+91-9653551294",
            "email": "guardian25@example.com"
        },
        "contact": {
            "email": "user25@example.com",
            "phone": "+91-7435479621"
        },
        "location": {
            "state": "Tamil Nadu",
            "district": "District-25",
            "city": "Madurai",
            "pincode": "784097",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 14.0428,
                "lng": 88.5743
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-21T00:00:00",
            "examiner": {
                "name": "Dr. Arjun Patel",
                "specialization": "Full Body",
                "institution": "Fortis"
            },
            "details": {
                "height": "163 cm",
                "weight": "62 kg",
                "bloodGroup": "B-",
                "bmi": 24.2,
                "bloodPressure": "118/79",
                "heartRate": 90,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Football",
                "Running"
            ],
            "screenTimeHours": 8,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-TAMIL NADU-025"
    },
    {
        "id": "a6f8d193-a39d-4f23-9abd-82d6bb34a21e",
        "name": "Meera Yadav",
        "age": 18,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "St. Xavier's College",
            "grade": "12th Grade",
            "rollNumber": "STU2025-1251"
        },
        "guardian": {
            "name": "Diya Singh",
            "relation": "Father",
            "phone": "+91-8430984015",
            "email": "guardian26@example.com"
        },
        "contact": {
            "email": "user26@example.com",
            "phone": "+91-8507189295"
        },
        "location": {
            "state": "Rajasthan",
            "district": "District-26",
            "city": "Udaipur",
            "pincode": "662422",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 32.8309,
                "lng": 68.594
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-23T00:00:00",
            "examiner": {
                "name": "Dr. Sai Patel",
                "specialization": "Optical",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "visionLeft": "6/9",
                "visionRight": "6/9",
                "spectaclesRequired": true,
                "colorBlindness": true,
                "summary": "Optical examination done."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Badminton",
                "Basketball"
            ],
            "screenTimeHours": 4,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-RAJASTHAN-026"
    },
    {
        "id": "13db464f-9cbe-49d6-96c9-8d591bdd9f86",
        "name": "Meera Verma",
        "age": 12,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "NIT Trichy",
            "grade": "12th Grade",
            "rollNumber": "STU2025-8650"
        },
        "guardian": {
            "name": "Krishna Singh",
            "relation": "Father",
            "phone": "+91-7983957311",
            "email": "guardian27@example.com"
        },
        "contact": {
            "email": "user27@example.com",
            "phone": "+91-9745938576"
        },
        "location": {
            "state": "Gujarat",
            "district": "District-27",
            "city": "Bhavnagar",
            "pincode": "953225",
            "region": "Rural",
            "coordinates": {
                "lat": 17.8158,
                "lng": 73.3112
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-21T00:00:00",
            "examiner": {
                "name": "Dr. Arjun Iyer",
                "specialization": "Cardiology",
                "institution": "Fortis"
            },
            "details": {
                "ecgResult": "Irregular",
                "cholesterol": "173 mg/dL",
                "heartRate": 95,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Running",
                "Badminton"
            ],
            "screenTimeHours": 5,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-GUJARAT-027"
    },
    {
        "id": "653ba3e5-fc8f-4481-a527-4e26f0396b3c",
        "name": "Pooja Chopra",
        "age": 13,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "IIT Bombay",
            "grade": "11th Grade",
            "rollNumber": "STU2025-7261"
        },
        "guardian": {
            "name": "Meera Agarwal",
            "relation": "Guardian",
            "phone": "+91-9685668337",
            "email": "guardian28@example.com"
        },
        "contact": {
            "email": "user28@example.com",
            "phone": "+91-8358389166"
        },
        "location": {
            "state": "Rajasthan",
            "district": "District-28",
            "city": "Jaipur",
            "pincode": "756497",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 35.162,
                "lng": 85.3923
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-27T00:00:00",
            "examiner": {
                "name": "Dr. Diya Patel",
                "specialization": "Full Body",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "height": "180 cm",
                "weight": "58 kg",
                "bloodGroup": "A+",
                "bmi": 17.9,
                "bloodPressure": "103/86",
                "heartRate": 71,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Running",
                "Swimming"
            ],
            "screenTimeHours": 8,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-RAJASTHAN-028"
    },
    {
        "id": "5111b7a7-7b99-4bd8-a8fd-5b35de6d5895",
        "name": "Aarav Patel",
        "age": 19,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "IIT Bombay",
            "grade": "9th Grade",
            "rollNumber": "STU2025-3812"
        },
        "guardian": {
            "name": "Diya Singh",
            "relation": "Mother",
            "phone": "+91-9537469350",
            "email": "guardian29@example.com"
        },
        "contact": {
            "email": "user29@example.com",
            "phone": "+91-8155111447"
        },
        "location": {
            "state": "Tamil Nadu",
            "district": "District-29",
            "city": "Chennai",
            "pincode": "171289",
            "region": "Rural",
            "coordinates": {
                "lat": 16.8738,
                "lng": 71.6565
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-03T00:00:00",
            "examiner": {
                "name": "Dr. Ananya Verma",
                "specialization": "Cardiology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "ecgResult": "Normal",
                "cholesterol": "220 mg/dL",
                "heartRate": 61,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Swimming",
                "Football"
            ],
            "screenTimeHours": 5,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-TAMIL NADU-029"
    },
    {
        "id": "c8077a18-559f-4164-9db9-2460edcd8344",
        "name": "Ishita Malhotra",
        "age": 16,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "NIT Trichy",
            "grade": "9th Grade",
            "rollNumber": "STU2025-7383"
        },
        "guardian": {
            "name": "Aditya Rao",
            "relation": "Guardian",
            "phone": "+91-7609970891",
            "email": "guardian30@example.com"
        },
        "contact": {
            "email": "user30@example.com",
            "phone": "+91-8719728348"
        },
        "location": {
            "state": "Delhi",
            "district": "District-30",
            "city": "Dwarka",
            "pincode": "387111",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 17.2102,
                "lng": 88.9085
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-21T00:00:00",
            "examiner": {
                "name": "Dr. Sanya Patel",
                "specialization": "Cardiology",
                "institution": "Max Healthcare"
            },
            "details": {
                "ecgResult": "Irregular",
                "cholesterol": "183 mg/dL",
                "heartRate": 60,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Swimming",
                "Football"
            ],
            "screenTimeHours": 6,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-DELHI-030"
    },
    {
        "id": "e98ee69a-d0bd-45d4-b5d9-92fe66a2ae14",
        "name": "Aditi Das",
        "age": 18,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "IIT Bombay",
            "grade": "9th Grade",
            "rollNumber": "STU2025-6727"
        },
        "guardian": {
            "name": "Krishna Rao",
            "relation": "Guardian",
            "phone": "+91-7168934855",
            "email": "guardian31@example.com"
        },
        "contact": {
            "email": "user31@example.com",
            "phone": "+91-7163852185"
        },
        "location": {
            "state": "Karnataka",
            "district": "District-31",
            "city": "Mangaluru",
            "pincode": "442623",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 27.5187,
                "lng": 80.4883
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-28T00:00:00",
            "examiner": {
                "name": "Dr. Arjun Singh",
                "specialization": "Cardiology",
                "institution": "Max Healthcare"
            },
            "details": {
                "ecgResult": "Irregular",
                "cholesterol": "212 mg/dL",
                "heartRate": 83,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Football",
                "Running"
            ],
            "screenTimeHours": 4,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-KARNATAKA-031"
    },
    {
        "id": "b4a4c543-b68f-4999-bbc7-bc0efd882f31",
        "name": "Ananya Mishra",
        "age": 19,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "IIT Bombay",
            "grade": "9th Grade",
            "rollNumber": "STU2025-6909"
        },
        "guardian": {
            "name": "Sanya Mehta",
            "relation": "Guardian",
            "phone": "+91-7723500352",
            "email": "guardian32@example.com"
        },
        "contact": {
            "email": "user32@example.com",
            "phone": "+91-8213010431"
        },
        "location": {
            "state": "Tamil Nadu",
            "district": "District-32",
            "city": "Tirunelveli",
            "pincode": "957920",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 17.8062,
                "lng": 75.581
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-07T00:00:00",
            "examiner": {
                "name": "Dr. Diya Singh",
                "specialization": "Cardiology",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "ecgResult": "Irregular",
                "cholesterol": "151 mg/dL",
                "heartRate": 85,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Running",
                "Cricket"
            ],
            "screenTimeHours": 2,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-TAMIL NADU-032"
    },
    {
        "id": "db4a169d-4332-4613-9776-7a66f2c8d384",
        "name": "Krishna Kapoor",
        "age": 21,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "2nd Year",
            "rollNumber": "STU2025-4704"
        },
        "guardian": {
            "name": "Ishita Malhotra",
            "relation": "Mother",
            "phone": "+91-8872618115",
            "email": "guardian33@example.com"
        },
        "contact": {
            "email": "user33@example.com",
            "phone": "+91-8404885028"
        },
        "location": {
            "state": "Kerala",
            "district": "District-33",
            "city": "Kozhikode",
            "pincode": "973178",
            "region": "Urban",
            "coordinates": {
                "lat": 15.8732,
                "lng": 76.491
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-30T00:00:00",
            "examiner": {
                "name": "Dr. Ishita Chopra",
                "specialization": "Dental",
                "institution": "Max Healthcare"
            },
            "details": {
                "cavities": 2,
                "bracesRequired": false,
                "gumHealth": "Average",
                "summary": "Dental check completed."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Cricket",
                "Running"
            ],
            "screenTimeHours": 3,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-KERALA-033"
    },
    {
        "id": "a2db1d14-86a2-49b9-b342-891e12687483",
        "name": "Ishita Chopra",
        "age": 17,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "9th Grade",
            "rollNumber": "STU2025-8993"
        },
        "guardian": {
            "name": "Vivaan Singh",
            "relation": "Mother",
            "phone": "+91-7773077942",
            "email": "guardian34@example.com"
        },
        "contact": {
            "email": "user34@example.com",
            "phone": "+91-9820252010"
        },
        "location": {
            "state": "Gujarat",
            "district": "District-34",
            "city": "Ahmedabad",
            "pincode": "409721",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 24.5689,
                "lng": 90.9497
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-20T00:00:00",
            "examiner": {
                "name": "Dr. Riya Das",
                "specialization": "Dental",
                "institution": "Max Healthcare"
            },
            "details": {
                "cavities": 4,
                "bracesRequired": false,
                "gumHealth": "Good",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Cricket",
                "Badminton"
            ],
            "screenTimeHours": 5,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-GUJARAT-034"
    },
    {
        "id": "8353ee08-d550-4e59-a4c8-1eea2fe211bb",
        "name": "Krishna Rao",
        "age": 22,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "1st Year",
            "rollNumber": "STU2025-3606"
        },
        "guardian": {
            "name": "Vihaan Verma",
            "relation": "Guardian",
            "phone": "+91-7549384035",
            "email": "guardian35@example.com"
        },
        "contact": {
            "email": "user35@example.com",
            "phone": "+91-7881814981"
        },
        "location": {
            "state": "Delhi",
            "district": "District-35",
            "city": "Rohini",
            "pincode": "723637",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 15.9553,
                "lng": 92.2406
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-23T00:00:00",
            "examiner": {
                "name": "Dr. Ishita Mishra",
                "specialization": "Physiology",
                "institution": "Max Healthcare"
            },
            "details": {
                "staminaScore": 97,
                "lungCapacity": "2400 ml",
                "flexibilityScore": 62,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Running",
                "Swimming"
            ],
            "screenTimeHours": 5,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-DELHI-035"
    },
    {
        "id": "53966cc9-b465-4544-9ee0-51e734826f4a",
        "name": "Aditya Chopra",
        "age": 14,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "3rd Year",
            "rollNumber": "STU2025-4443"
        },
        "guardian": {
            "name": "Riya Malhotra",
            "relation": "Guardian",
            "phone": "+91-7013012785",
            "email": "guardian36@example.com"
        },
        "contact": {
            "email": "user36@example.com",
            "phone": "+91-8317527188"
        },
        "location": {
            "state": "West Bengal",
            "district": "District-36",
            "city": "Durgapur",
            "pincode": "758827",
            "region": "Rural",
            "coordinates": {
                "lat": 20.1764,
                "lng": 77.2935
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-15T00:00:00",
            "examiner": {
                "name": "Dr. Aditya Mehta",
                "specialization": "Dental",
                "institution": "Fortis"
            },
            "details": {
                "cavities": 2,
                "bracesRequired": false,
                "gumHealth": "Average",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Swimming",
                "Badminton"
            ],
            "screenTimeHours": 3,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-WEST BENGAL-036"
    },
    {
        "id": "52bfcedc-c3bb-4604-af22-2c12c2f8c91a",
        "name": "Arjun Singh",
        "age": 14,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "2nd Year",
            "rollNumber": "STU2025-8122"
        },
        "guardian": {
            "name": "Aditya Patel",
            "relation": "Father",
            "phone": "+91-7930915036",
            "email": "guardian37@example.com"
        },
        "contact": {
            "email": "user37@example.com",
            "phone": "+91-7486196922"
        },
        "location": {
            "state": "Maharashtra",
            "district": "District-37",
            "city": "Aurangabad",
            "pincode": "503021",
            "region": "Urban",
            "coordinates": {
                "lat": 9.2768,
                "lng": 74.314
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-24T00:00:00",
            "examiner": {
                "name": "Dr. Riya Yadav",
                "specialization": "Optical",
                "institution": "Fortis"
            },
            "details": {
                "visionLeft": "6/9",
                "visionRight": "6/9",
                "spectaclesRequired": false,
                "colorBlindness": true,
                "summary": "Optical examination done."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Swimming",
                "Basketball"
            ],
            "screenTimeHours": 2,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-MAHARASHTRA-037"
    },
    {
        "id": "9548449f-a4d6-4f9c-bb12-0a35f16ce583",
        "name": "Aditya Yadav",
        "age": 14,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "St. Xavier's College",
            "grade": "2nd Year",
            "rollNumber": "STU2025-8281"
        },
        "guardian": {
            "name": "Sanya Rao",
            "relation": "Mother",
            "phone": "+91-7360033786",
            "email": "guardian38@example.com"
        },
        "contact": {
            "email": "user38@example.com",
            "phone": "+91-7711228293"
        },
        "location": {
            "state": "Uttar Pradesh",
            "district": "District-38",
            "city": "Kanpur",
            "pincode": "475312",
            "region": "Rural",
            "coordinates": {
                "lat": 10.6311,
                "lng": 82.8005
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-03T00:00:00",
            "examiner": {
                "name": "Dr. Vivaan Nair",
                "specialization": "Dental",
                "institution": "Fortis"
            },
            "details": {
                "cavities": 2,
                "bracesRequired": true,
                "gumHealth": "Good",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Basketball",
                "Badminton"
            ],
            "screenTimeHours": 8,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-UTTAR PRADESH-038"
    },
    {
        "id": "db36c707-6cc3-4178-8ed2-534bfd2d8c7a",
        "name": "Aditi Sharma",
        "age": 22,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "10th Grade",
            "rollNumber": "STU2025-2990"
        },
        "guardian": {
            "name": "Arjun Sharma",
            "relation": "Guardian",
            "phone": "+91-9363574697",
            "email": "guardian39@example.com"
        },
        "contact": {
            "email": "user39@example.com",
            "phone": "+91-7996245862"
        },
        "location": {
            "state": "Rajasthan",
            "district": "District-39",
            "city": "Kota",
            "pincode": "630316",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 20.3152,
                "lng": 75.1399
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-19T00:00:00",
            "examiner": {
                "name": "Dr. Aditi Sharma",
                "specialization": "Cardiology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "ecgResult": "Irregular",
                "cholesterol": "157 mg/dL",
                "heartRate": 97,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Running",
                "Football"
            ],
            "screenTimeHours": 7,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-RAJASTHAN-039"
    },
    {
        "id": "f57e8e33-38c0-4232-b4ce-155712fad2cf",
        "name": "Pooja Yadav",
        "age": 20,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "IIT Bombay",
            "grade": "2nd Year",
            "rollNumber": "STU2025-3595"
        },
        "guardian": {
            "name": "Ananya Mehta",
            "relation": "Father",
            "phone": "+91-7378870453",
            "email": "guardian40@example.com"
        },
        "contact": {
            "email": "user40@example.com",
            "phone": "+91-8438343125"
        },
        "location": {
            "state": "Karnataka",
            "district": "District-40",
            "city": "Bengaluru",
            "pincode": "495158",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 22.047,
                "lng": 83.4187
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-01T00:00:00",
            "examiner": {
                "name": "Dr. Aditya Chopra",
                "specialization": "Physiology",
                "institution": "Fortis"
            },
            "details": {
                "staminaScore": 61,
                "lungCapacity": "3553 ml",
                "flexibilityScore": 42,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Cricket",
                "Basketball"
            ],
            "screenTimeHours": 8,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-KARNATAKA-040"
    },
    {
        "id": "ed258cd9-7761-4a2c-abbb-a4767256698d",
        "name": "Ishita Sharma",
        "age": 16,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "NIT Trichy",
            "grade": "12th Grade",
            "rollNumber": "STU2025-6000"
        },
        "guardian": {
            "name": "Krishna Patel",
            "relation": "Mother",
            "phone": "+91-8019413153",
            "email": "guardian41@example.com"
        },
        "contact": {
            "email": "user41@example.com",
            "phone": "+91-9558712280"
        },
        "location": {
            "state": "Kerala",
            "district": "District-41",
            "city": "Alappuzha",
            "pincode": "268328",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 29.4277,
                "lng": 81.9159
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-05T00:00:00",
            "examiner": {
                "name": "Dr. Aarav Kapoor",
                "specialization": "Cardiology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "ecgResult": "Normal",
                "cholesterol": "227 mg/dL",
                "heartRate": 76,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Swimming",
                "Football"
            ],
            "screenTimeHours": 3,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-KERALA-041"
    },
    {
        "id": "fb2b2996-bc37-4429-bf80-d62b6332f751",
        "name": "Riya Malhotra",
        "age": 19,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "NIT Trichy",
            "grade": "11th Grade",
            "rollNumber": "STU2025-8730"
        },
        "guardian": {
            "name": "Meera Mishra",
            "relation": "Mother",
            "phone": "+91-8656312546",
            "email": "guardian42@example.com"
        },
        "contact": {
            "email": "user42@example.com",
            "phone": "+91-9351833410"
        },
        "location": {
            "state": "Maharashtra",
            "district": "District-42",
            "city": "Nashik",
            "pincode": "964030",
            "region": "Rural",
            "coordinates": {
                "lat": 24.8194,
                "lng": 71.9516
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-23T00:00:00",
            "examiner": {
                "name": "Dr. Vihaan Verma",
                "specialization": "Full Body",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "height": "182 cm",
                "weight": "79 kg",
                "bloodGroup": "B+",
                "bmi": 25.0,
                "bloodPressure": "116/84",
                "heartRate": 67,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Badminton",
                "Basketball"
            ],
            "screenTimeHours": 7,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-MAHARASHTRA-042"
    },
    {
        "id": "9b3fbc31-633f-4974-83b4-a26727db21da",
        "name": "Meera Rao",
        "age": 21,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "3rd Year",
            "rollNumber": "STU2025-6013"
        },
        "guardian": {
            "name": "Ishita Singh",
            "relation": "Mother",
            "phone": "+91-7571448800",
            "email": "guardian43@example.com"
        },
        "contact": {
            "email": "user43@example.com",
            "phone": "+91-9408897322"
        },
        "location": {
            "state": "Delhi",
            "district": "District-43",
            "city": "Connaught Place",
            "pincode": "613291",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 10.2832,
                "lng": 70.9437
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-05T00:00:00",
            "examiner": {
                "name": "Dr. Riya Kapoor",
                "specialization": "Dental",
                "institution": "Fortis"
            },
            "details": {
                "cavities": 3,
                "bracesRequired": true,
                "gumHealth": "Good",
                "summary": "Dental check completed."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Running",
                "Football"
            ],
            "screenTimeHours": 6,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-DELHI-043"
    },
    {
        "id": "b52e5658-3d9c-478c-93ab-21e5bc89f05f",
        "name": "Aditi Yadav",
        "age": 22,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "NIT Trichy",
            "grade": "12th Grade",
            "rollNumber": "STU2025-8759"
        },
        "guardian": {
            "name": "Ananya Mishra",
            "relation": "Guardian",
            "phone": "+91-9718030870",
            "email": "guardian44@example.com"
        },
        "contact": {
            "email": "user44@example.com",
            "phone": "+91-8447579815"
        },
        "location": {
            "state": "Kerala",
            "district": "District-44",
            "city": "Kochi",
            "pincode": "665681",
            "region": "Urban",
            "coordinates": {
                "lat": 18.0083,
                "lng": 83.9198
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-20T00:00:00",
            "examiner": {
                "name": "Dr. Diya Chopra",
                "specialization": "Optical",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "visionLeft": "6/6",
                "visionRight": "6/6",
                "spectaclesRequired": true,
                "colorBlindness": false,
                "summary": "Optical examination done."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Basketball",
                "Swimming"
            ],
            "screenTimeHours": 5,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-KERALA-044"
    },
    {
        "id": "1def9dc7-48d3-44e0-91ec-e1a3ab84c367",
        "name": "Sanya Yadav",
        "age": 18,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "St. Xavier's College",
            "grade": "3rd Year",
            "rollNumber": "STU2025-9377"
        },
        "guardian": {
            "name": "Ananya Patel",
            "relation": "Father",
            "phone": "+91-7721907438",
            "email": "guardian45@example.com"
        },
        "contact": {
            "email": "user45@example.com",
            "phone": "+91-9145322226"
        },
        "location": {
            "state": "Maharashtra",
            "district": "District-45",
            "city": "Nagpur",
            "pincode": "194806",
            "region": "Rural",
            "coordinates": {
                "lat": 30.8025,
                "lng": 70.4798
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-10T00:00:00",
            "examiner": {
                "name": "Dr. Sai Chopra",
                "specialization": "Dental",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "cavities": 3,
                "bracesRequired": false,
                "gumHealth": "Needs Attention",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Running",
                "Football"
            ],
            "screenTimeHours": 5,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-MAHARASHTRA-045"
    },
    {
        "id": "0e4ecf29-e744-40f8-b0e0-8ab757275a02",
        "name": "Aarav Mishra",
        "age": 17,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "AIIMS Delhi",
            "grade": "10th Grade",
            "rollNumber": "STU2025-8109"
        },
        "guardian": {
            "name": "Pooja Sharma",
            "relation": "Mother",
            "phone": "+91-9520973420",
            "email": "guardian46@example.com"
        },
        "contact": {
            "email": "user46@example.com",
            "phone": "+91-7623604599"
        },
        "location": {
            "state": "West Bengal",
            "district": "District-46",
            "city": "Kolkata",
            "pincode": "963091",
            "region": "Urban",
            "coordinates": {
                "lat": 10.7369,
                "lng": 82.6288
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-15T00:00:00",
            "examiner": {
                "name": "Dr. Vivaan Mishra",
                "specialization": "Full Body",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "height": "144 cm",
                "weight": "48 kg",
                "bloodGroup": "AB+",
                "bmi": 20.0,
                "bloodPressure": "118/65",
                "heartRate": 65,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Cricket",
                "Basketball"
            ],
            "screenTimeHours": 7,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-WEST BENGAL-046"
    },
    {
        "id": "7dbb1eaa-2a24-47ba-bf93-2b566b9967f8",
        "name": "Pooja Das",
        "age": 15,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "IIT Bombay",
            "grade": "11th Grade",
            "rollNumber": "STU2025-6205"
        },
        "guardian": {
            "name": "Aditi Iyer",
            "relation": "Guardian",
            "phone": "+91-7089677064",
            "email": "guardian47@example.com"
        },
        "contact": {
            "email": "user47@example.com",
            "phone": "+91-9413020334"
        },
        "location": {
            "state": "West Bengal",
            "district": "District-47",
            "city": "Siliguri",
            "pincode": "726806",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 18.329,
                "lng": 73.1727
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-30T00:00:00",
            "examiner": {
                "name": "Dr. Meera Iyer",
                "specialization": "Cardiology",
                "institution": "Fortis"
            },
            "details": {
                "ecgResult": "Normal",
                "cholesterol": "180 mg/dL",
                "heartRate": 80,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Badminton",
                "Running"
            ],
            "screenTimeHours": 6,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-WEST BENGAL-047"
    },
    {
        "id": "653869e0-800b-44fc-ac77-6ae27315a0a1",
        "name": "Vihaan Verma",
        "age": 12,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "AIIMS Delhi",
            "grade": "12th Grade",
            "rollNumber": "STU2025-2385"
        },
        "guardian": {
            "name": "Riya Mehta",
            "relation": "Guardian",
            "phone": "+91-9899236108",
            "email": "guardian48@example.com"
        },
        "contact": {
            "email": "user48@example.com",
            "phone": "+91-9429111855"
        },
        "location": {
            "state": "Delhi",
            "district": "District-48",
            "city": "Saket",
            "pincode": "837004",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 17.3098,
                "lng": 85.1146
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-30T00:00:00",
            "examiner": {
                "name": "Dr. Vihaan Das",
                "specialization": "Dental",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "cavities": 4,
                "bracesRequired": false,
                "gumHealth": "Needs Attention",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Basketball",
                "Football"
            ],
            "screenTimeHours": 3,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-DELHI-048"
    },
    {
        "id": "7e7687a2-5dd8-44d8-896a-dea9446eb1d3",
        "name": "Riya Nair",
        "age": 18,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "IIT Bombay",
            "grade": "9th Grade",
            "rollNumber": "STU2025-8739"
        },
        "guardian": {
            "name": "Meera Mehta",
            "relation": "Guardian",
            "phone": "+91-8039415700",
            "email": "guardian49@example.com"
        },
        "contact": {
            "email": "user49@example.com",
            "phone": "+91-9761938120"
        },
        "location": {
            "state": "Gujarat",
            "district": "District-49",
            "city": "Rajkot",
            "pincode": "600102",
            "region": "Rural",
            "coordinates": {
                "lat": 13.0571,
                "lng": 83.623
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-10T00:00:00",
            "examiner": {
                "name": "Dr. Ishita Yadav",
                "specialization": "Dental",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "cavities": 0,
                "bracesRequired": true,
                "gumHealth": "Needs Attention",
                "summary": "Dental check completed."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Swimming",
                "Cricket"
            ],
            "screenTimeHours": 6,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-GUJARAT-049"
    },
    {
        "id": "1dd66c38-94dc-4293-bfa8-1601fab8bb5b",
        "name": "Vivaan Verma",
        "age": 14,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "2nd Year",
            "rollNumber": "STU2025-3744"
        },
        "guardian": {
            "name": "Ishita Rao",
            "relation": "Father",
            "phone": "+91-8245995873",
            "email": "guardian50@example.com"
        },
        "contact": {
            "email": "user50@example.com",
            "phone": "+91-8365170066"
        },
        "location": {
            "state": "Uttar Pradesh",
            "district": "District-0",
            "city": "Varanasi",
            "pincode": "829168",
            "region": "Rural",
            "coordinates": {
                "lat": 19.8329,
                "lng": 93.6317
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-07T00:00:00",
            "examiner": {
                "name": "Dr. Meera Malhotra",
                "specialization": "Physiology",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "staminaScore": 90,
                "lungCapacity": "3350 ml",
                "flexibilityScore": 49,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Football",
                "Swimming"
            ],
            "screenTimeHours": 8,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-UTTAR PRADESH-050"
    },
    {
        "id": "6d68218d-24c2-40ab-90b6-9f64a55a4411",
        "name": "Aditya Nair",
        "age": 15,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "NIT Trichy",
            "grade": "3rd Year",
            "rollNumber": "STU2025-2214"
        },
        "guardian": {
            "name": "Vihaan Das",
            "relation": "Father",
            "phone": "+91-7390801324",
            "email": "guardian51@example.com"
        },
        "contact": {
            "email": "user51@example.com",
            "phone": "+91-8605385172"
        },
        "location": {
            "state": "Tamil Nadu",
            "district": "District-1",
            "city": "Coimbatore",
            "pincode": "843670",
            "region": "Urban",
            "coordinates": {
                "lat": 21.0048,
                "lng": 95.5279
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-02T00:00:00",
            "examiner": {
                "name": "Dr. Ishita Mishra",
                "specialization": "Full Body",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "height": "153 cm",
                "weight": "41 kg",
                "bloodGroup": "A-",
                "bmi": 25.3,
                "bloodPressure": "108/67",
                "heartRate": 60,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Running",
                "Basketball"
            ],
            "screenTimeHours": 7,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-TAMIL NADU-051"
    },
    {
        "id": "9eea99d2-63d8-4c11-9beb-8f450d71f5d4",
        "name": "Aditya Mishra",
        "age": 21,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "Delhi Public School",
            "grade": "10th Grade",
            "rollNumber": "STU2025-2053"
        },
        "guardian": {
            "name": "Pooja Iyer",
            "relation": "Guardian",
            "phone": "+91-7776191195",
            "email": "guardian52@example.com"
        },
        "contact": {
            "email": "user52@example.com",
            "phone": "+91-9610111660"
        },
        "location": {
            "state": "Maharashtra",
            "district": "District-2",
            "city": "Pune",
            "pincode": "201552",
            "region": "Rural",
            "coordinates": {
                "lat": 8.799,
                "lng": 91.1133
            }
        },
        "healthReport": {
            "type": "Neurology",
            "date": "2025-09-06T00:00:00",
            "examiner": {
                "name": "Dr. Vivaan Mehta",
                "specialization": "Neurology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "stressLevel": "High",
                "memoryTestScore": 71,
                "sleepQuality": "Average",
                "summary": "Neurological screening completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Badminton",
                "Swimming"
            ],
            "screenTimeHours": 5,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-MAHARASHTRA-052"
    },
    {
        "id": "df79fdc0-2dc2-4a3a-bf6c-bb7025944d68",
        "name": "Vivaan Agarwal",
        "age": 20,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "NIT Trichy",
            "grade": "9th Grade",
            "rollNumber": "STU2025-4438"
        },
        "guardian": {
            "name": "Sanya Kapoor",
            "relation": "Father",
            "phone": "+91-8997746775",
            "email": "guardian53@example.com"
        },
        "contact": {
            "email": "user53@example.com",
            "phone": "+91-8025380768"
        },
        "location": {
            "state": "Kerala",
            "district": "District-3",
            "city": "Thrissur",
            "pincode": "160287",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 16.2617,
                "lng": 80.7932
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-22T00:00:00",
            "examiner": {
                "name": "Dr. Vihaan Rao",
                "specialization": "Physiology",
                "institution": "Max Healthcare"
            },
            "details": {
                "staminaScore": 96,
                "lungCapacity": "2941 ml",
                "flexibilityScore": 99,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Swimming",
                "Football"
            ],
            "screenTimeHours": 6,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-KERALA-053"
    },
    {
        "id": "eb434dcc-b006-433d-9f4d-f5bb8336c5d9",
        "name": "Vivaan Chopra",
        "age": 19,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "3rd Year",
            "rollNumber": "STU2025-2952"
        },
        "guardian": {
            "name": "Diya Patel",
            "relation": "Guardian",
            "phone": "+91-8231992435",
            "email": "guardian54@example.com"
        },
        "contact": {
            "email": "user54@example.com",
            "phone": "+91-9982042304"
        },
        "location": {
            "state": "Maharashtra",
            "district": "District-4",
            "city": "Mumbai",
            "pincode": "604089",
            "region": "Urban",
            "coordinates": {
                "lat": 31.5923,
                "lng": 71.0528
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-12T00:00:00",
            "examiner": {
                "name": "Dr. Meera Iyer",
                "specialization": "Optical",
                "institution": "Fortis"
            },
            "details": {
                "visionLeft": "6/6",
                "visionRight": "6/6",
                "spectaclesRequired": false,
                "colorBlindness": false,
                "summary": "Optical examination done."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Swimming",
                "Badminton"
            ],
            "screenTimeHours": 6,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-MAHARASHTRA-054"
    },
    {
        "id": "d0e2b9de-4311-4dd0-9f54-4b3cfd893de0",
        "name": "Vivaan Rao",
        "age": 20,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "St. Xavier's College",
            "grade": "3rd Year",
            "rollNumber": "STU2025-7537"
        },
        "guardian": {
            "name": "Sanya Mishra",
            "relation": "Guardian",
            "phone": "+91-9344254344",
            "email": "guardian55@example.com"
        },
        "contact": {
            "email": "user55@example.com",
            "phone": "+91-9441886945"
        },
        "location": {
            "state": "Rajasthan",
            "district": "District-5",
            "city": "Ajmer",
            "pincode": "312987",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 30.1382,
                "lng": 83.076
            }
        },
        "healthReport": {
            "type": "Neurology",
            "date": "2025-09-23T00:00:00",
            "examiner": {
                "name": "Dr. Aarav Chopra",
                "specialization": "Neurology",
                "institution": "Max Healthcare"
            },
            "details": {
                "stressLevel": "Moderate",
                "memoryTestScore": 76,
                "sleepQuality": "Average",
                "summary": "Neurological screening completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Cricket",
                "Football"
            ],
            "screenTimeHours": 5,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-RAJASTHAN-055"
    },
    {
        "id": "ea7c1b10-8f01-4121-b761-7fc2583aa1f1",
        "name": "Sai Yadav",
        "age": 13,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "St. Xavier's College",
            "grade": "2nd Year",
            "rollNumber": "STU2025-4506"
        },
        "guardian": {
            "name": "Aditi Rao",
            "relation": "Father",
            "phone": "+91-9770652475",
            "email": "guardian56@example.com"
        },
        "contact": {
            "email": "user56@example.com",
            "phone": "+91-8547361523"
        },
        "location": {
            "state": "Punjab",
            "district": "District-6",
            "city": "Ludhiana",
            "pincode": "366750",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 36.2261,
                "lng": 92.9349
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-20T00:00:00",
            "examiner": {
                "name": "Dr. Aditi Verma",
                "specialization": "Physiology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "staminaScore": 98,
                "lungCapacity": "3735 ml",
                "flexibilityScore": 73,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Swimming",
                "Badminton"
            ],
            "screenTimeHours": 3,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-PUNJAB-056"
    },
    {
        "id": "132c87e5-7056-48e5-9999-e60df891df84",
        "name": "Vivaan Das",
        "age": 14,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "AIIMS Delhi",
            "grade": "10th Grade",
            "rollNumber": "STU2025-3571"
        },
        "guardian": {
            "name": "Arjun Agarwal",
            "relation": "Mother",
            "phone": "+91-8587627525",
            "email": "guardian57@example.com"
        },
        "contact": {
            "email": "user57@example.com",
            "phone": "+91-7860495768"
        },
        "location": {
            "state": "Punjab",
            "district": "District-7",
            "city": "Amritsar",
            "pincode": "894569",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 23.8484,
                "lng": 77.5432
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-18T00:00:00",
            "examiner": {
                "name": "Dr. Arjun Das",
                "specialization": "Full Body",
                "institution": "Max Healthcare"
            },
            "details": {
                "height": "161 cm",
                "weight": "84 kg",
                "bloodGroup": "O-",
                "bmi": 27.0,
                "bloodPressure": "112/66",
                "heartRate": 99,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Badminton",
                "Basketball"
            ],
            "screenTimeHours": 4,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-PUNJAB-057"
    },
    {
        "id": "820f3dfa-b389-48e2-bc45-f45f4fcc0f4b",
        "name": "Vivaan Iyer",
        "age": 15,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "Delhi Public School",
            "grade": "3rd Year",
            "rollNumber": "STU2025-8757"
        },
        "guardian": {
            "name": "Aarav Rao",
            "relation": "Father",
            "phone": "+91-8984865809",
            "email": "guardian58@example.com"
        },
        "contact": {
            "email": "user58@example.com",
            "phone": "+91-7571648981"
        },
        "location": {
            "state": "Uttar Pradesh",
            "district": "District-8",
            "city": "Lucknow",
            "pincode": "998901",
            "region": "Rural",
            "coordinates": {
                "lat": 28.9945,
                "lng": 89.242
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-07T00:00:00",
            "examiner": {
                "name": "Dr. Riya Sharma",
                "specialization": "Cardiology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "ecgResult": "Normal",
                "cholesterol": "166 mg/dL",
                "heartRate": 77,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Running",
                "Football"
            ],
            "screenTimeHours": 3,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-UTTAR PRADESH-058"
    },
    {
        "id": "f1c24220-269b-472f-a9f6-2605480239f1",
        "name": "Aditya Das",
        "age": 21,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "1st Year",
            "rollNumber": "STU2025-6476"
        },
        "guardian": {
            "name": "Aarav Malhotra",
            "relation": "Guardian",
            "phone": "+91-9380222272",
            "email": "guardian59@example.com"
        },
        "contact": {
            "email": "user59@example.com",
            "phone": "+91-9978149259"
        },
        "location": {
            "state": "Delhi",
            "district": "District-9",
            "city": "Karol Bagh",
            "pincode": "546113",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 31.6698,
                "lng": 85.3755
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-05T00:00:00",
            "examiner": {
                "name": "Dr. Aarav Singh",
                "specialization": "Dental",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "cavities": 4,
                "bracesRequired": true,
                "gumHealth": "Needs Attention",
                "summary": "Dental check completed."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Running",
                "Badminton"
            ],
            "screenTimeHours": 6,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-DELHI-059"
    },
    {
        "id": "040e0041-ce79-47e1-98bd-bbaa23da363b",
        "name": "Aarav Mishra",
        "age": 16,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "St. Xavier's College",
            "grade": "12th Grade",
            "rollNumber": "STU2025-5163"
        },
        "guardian": {
            "name": "Aarav Mishra",
            "relation": "Guardian",
            "phone": "+91-7750814168",
            "email": "guardian60@example.com"
        },
        "contact": {
            "email": "user60@example.com",
            "phone": "+91-9307959465"
        },
        "location": {
            "state": "Gujarat",
            "district": "District-10",
            "city": "Surat",
            "pincode": "651296",
            "region": "Rural",
            "coordinates": {
                "lat": 32.6445,
                "lng": 76.9471
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-13T00:00:00",
            "examiner": {
                "name": "Dr. Ishita Verma",
                "specialization": "Dental",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "cavities": 3,
                "bracesRequired": false,
                "gumHealth": "Average",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Cricket",
                "Running"
            ],
            "screenTimeHours": 4,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-GUJARAT-060"
    },
    {
        "id": "849f8432-e91c-4efd-b2d0-193f15943bfc",
        "name": "Diya Verma",
        "age": 20,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "St. Xavier's College",
            "grade": "1st Year",
            "rollNumber": "STU2025-3269"
        },
        "guardian": {
            "name": "Aarav Nair",
            "relation": "Guardian",
            "phone": "+91-7461499001",
            "email": "guardian61@example.com"
        },
        "contact": {
            "email": "user61@example.com",
            "phone": "+91-7826908478"
        },
        "location": {
            "state": "Uttar Pradesh",
            "district": "District-11",
            "city": "Prayagraj",
            "pincode": "337305",
            "region": "Urban",
            "coordinates": {
                "lat": 14.6003,
                "lng": 93.0778
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-07T00:00:00",
            "examiner": {
                "name": "Dr. Aditi Das",
                "specialization": "Cardiology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "ecgResult": "Irregular",
                "cholesterol": "240 mg/dL",
                "heartRate": 97,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Basketball",
                "Swimming"
            ],
            "screenTimeHours": 2,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-UTTAR PRADESH-061"
    },
    {
        "id": "10b7649c-d474-4fde-b86b-5dae592927fe",
        "name": "Pooja Chopra",
        "age": 19,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "NIT Trichy",
            "grade": "2nd Year",
            "rollNumber": "STU2025-4851"
        },
        "guardian": {
            "name": "Ishita Chopra",
            "relation": "Guardian",
            "phone": "+91-7594235810",
            "email": "guardian62@example.com"
        },
        "contact": {
            "email": "user62@example.com",
            "phone": "+91-9581525935"
        },
        "location": {
            "state": "Kerala",
            "district": "District-12",
            "city": "Thiruvananthapuram",
            "pincode": "619596",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 8.1388,
                "lng": 88.7073
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-04T00:00:00",
            "examiner": {
                "name": "Dr. Krishna Mehta",
                "specialization": "Optical",
                "institution": "Max Healthcare"
            },
            "details": {
                "visionLeft": "6/9",
                "visionRight": "6/6",
                "spectaclesRequired": true,
                "colorBlindness": true,
                "summary": "Optical examination done."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Running",
                "Basketball"
            ],
            "screenTimeHours": 7,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-KERALA-062"
    },
    {
        "id": "f32b5083-845b-47ce-a362-fb65c188ee85",
        "name": "Krishna Verma",
        "age": 19,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "IIT Bombay",
            "grade": "2nd Year",
            "rollNumber": "STU2025-6937"
        },
        "guardian": {
            "name": "Meera Iyer",
            "relation": "Father",
            "phone": "+91-9481886983",
            "email": "guardian63@example.com"
        },
        "contact": {
            "email": "user63@example.com",
            "phone": "+91-7696330038"
        },
        "location": {
            "state": "Karnataka",
            "district": "District-13",
            "city": "Mysuru",
            "pincode": "862765",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 29.0187,
                "lng": 79.9729
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-27T00:00:00",
            "examiner": {
                "name": "Dr. Meera Yadav",
                "specialization": "Physiology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "staminaScore": 95,
                "lungCapacity": "4119 ml",
                "flexibilityScore": 50,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Basketball",
                "Badminton"
            ],
            "screenTimeHours": 3,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-KARNATAKA-063"
    },
    {
        "id": "1534a699-f3f9-4fd6-9bcf-4ac95721320e",
        "name": "Meera Das",
        "age": 17,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "NIT Trichy",
            "grade": "11th Grade",
            "rollNumber": "STU2025-3281"
        },
        "guardian": {
            "name": "Sanya Malhotra",
            "relation": "Mother",
            "phone": "+91-9181880333",
            "email": "guardian64@example.com"
        },
        "contact": {
            "email": "user64@example.com",
            "phone": "+91-9116734535"
        },
        "location": {
            "state": "Punjab",
            "district": "District-14",
            "city": "Bathinda",
            "pincode": "231519",
            "region": "Rural",
            "coordinates": {
                "lat": 21.5451,
                "lng": 71.9422
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-25T00:00:00",
            "examiner": {
                "name": "Dr. Krishna Nair",
                "specialization": "Dental",
                "institution": "Fortis"
            },
            "details": {
                "cavities": 3,
                "bracesRequired": true,
                "gumHealth": "Good",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Cricket",
                "Basketball"
            ],
            "screenTimeHours": 5,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-PUNJAB-064"
    },
    {
        "id": "5f12ae8d-48b0-47c1-8176-f8db5a9490ce",
        "name": "Sanya Malhotra",
        "age": 17,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "1st Year",
            "rollNumber": "STU2025-6692"
        },
        "guardian": {
            "name": "Meera Patel",
            "relation": "Mother",
            "phone": "+91-7319808314",
            "email": "guardian65@example.com"
        },
        "contact": {
            "email": "user65@example.com",
            "phone": "+91-8951426553"
        },
        "location": {
            "state": "Uttar Pradesh",
            "district": "District-15",
            "city": "Agra",
            "pincode": "697926",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 15.8314,
                "lng": 81.1742
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-10T00:00:00",
            "examiner": {
                "name": "Dr. Sanya Verma",
                "specialization": "Dental",
                "institution": "Max Healthcare"
            },
            "details": {
                "cavities": 3,
                "bracesRequired": false,
                "gumHealth": "Needs Attention",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Football",
                "Swimming"
            ],
            "screenTimeHours": 2,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-UTTAR PRADESH-065"
    },
    {
        "id": "2d032202-aa6b-465c-bff1-6b1b713aa4ef",
        "name": "Vihaan Agarwal",
        "age": 22,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "AIIMS Delhi",
            "grade": "3rd Year",
            "rollNumber": "STU2025-9769"
        },
        "guardian": {
            "name": "Ishita Yadav",
            "relation": "Mother",
            "phone": "+91-9379846873",
            "email": "guardian66@example.com"
        },
        "contact": {
            "email": "user66@example.com",
            "phone": "+91-8996652647"
        },
        "location": {
            "state": "Gujarat",
            "district": "District-16",
            "city": "Vadodara",
            "pincode": "978093",
            "region": "Urban",
            "coordinates": {
                "lat": 9.2423,
                "lng": 86.2647
            }
        },
        "healthReport": {
            "type": "Neurology",
            "date": "2025-09-24T00:00:00",
            "examiner": {
                "name": "Dr. Sanya Iyer",
                "specialization": "Neurology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "stressLevel": "High",
                "memoryTestScore": 73,
                "sleepQuality": "Good",
                "summary": "Neurological screening completed."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Football",
                "Basketball"
            ],
            "screenTimeHours": 3,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-GUJARAT-066"
    },
    {
        "id": "6d3a5bc8-9b4b-4d7d-8a1b-cfffd5630366",
        "name": "Aditya Mishra",
        "age": 14,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "Delhi Public School",
            "grade": "9th Grade",
            "rollNumber": "STU2025-2576"
        },
        "guardian": {
            "name": "Vihaan Iyer",
            "relation": "Father",
            "phone": "+91-7177056462",
            "email": "guardian67@example.com"
        },
        "contact": {
            "email": "user67@example.com",
            "phone": "+91-8452039695"
        },
        "location": {
            "state": "Karnataka",
            "district": "District-17",
            "city": "Hubballi",
            "pincode": "634165",
            "region": "Rural",
            "coordinates": {
                "lat": 20.9301,
                "lng": 77.5962
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-11T00:00:00",
            "examiner": {
                "name": "Dr. Diya Chopra",
                "specialization": "Physiology",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "staminaScore": 89,
                "lungCapacity": "2954 ml",
                "flexibilityScore": 53,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Football",
                "Basketball"
            ],
            "screenTimeHours": 8,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-KARNATAKA-067"
    },
    {
        "id": "e11bd899-c0e3-41ea-b932-03c4323e405e",
        "name": "Pooja Chopra",
        "age": 21,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "Delhi Public School",
            "grade": "10th Grade",
            "rollNumber": "STU2025-2837"
        },
        "guardian": {
            "name": "Aditi Verma",
            "relation": "Guardian",
            "phone": "+91-9094641350",
            "email": "guardian68@example.com"
        },
        "contact": {
            "email": "user68@example.com",
            "phone": "+91-8700276955"
        },
        "location": {
            "state": "West Bengal",
            "district": "District-18",
            "city": "Howrah",
            "pincode": "935556",
            "region": "Urban",
            "coordinates": {
                "lat": 19.7456,
                "lng": 72.1257
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-28T00:00:00",
            "examiner": {
                "name": "Dr. Meera Sharma",
                "specialization": "Dental",
                "institution": "Fortis"
            },
            "details": {
                "cavities": 4,
                "bracesRequired": true,
                "gumHealth": "Average",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Running",
                "Basketball"
            ],
            "screenTimeHours": 2,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-WEST BENGAL-068"
    },
    {
        "id": "e30502cc-b207-4552-af65-0b33cf84e193",
        "name": "Riya Singh",
        "age": 19,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "3rd Year",
            "rollNumber": "STU2025-7761"
        },
        "guardian": {
            "name": "Aarav Singh",
            "relation": "Mother",
            "phone": "+91-8846539477",
            "email": "guardian69@example.com"
        },
        "contact": {
            "email": "user69@example.com",
            "phone": "+91-9995401779"
        },
        "location": {
            "state": "West Bengal",
            "district": "District-19",
            "city": "Asansol",
            "pincode": "625211",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 18.6037,
                "lng": 94.2701
            }
        },
        "healthReport": {
            "type": "Neurology",
            "date": "2025-09-24T00:00:00",
            "examiner": {
                "name": "Dr. Sanya Kapoor",
                "specialization": "Neurology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "stressLevel": "High",
                "memoryTestScore": 84,
                "sleepQuality": "Average",
                "summary": "Neurological screening completed."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Cricket",
                "Basketball"
            ],
            "screenTimeHours": 6,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-WEST BENGAL-069"
    },
    {
        "id": "3d1b6d4a-cbc7-45f0-8d0b-ad4212f0535f",
        "name": "Meera Mishra",
        "age": 21,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "10th Grade",
            "rollNumber": "STU2025-5296"
        },
        "guardian": {
            "name": "Ishita Sharma",
            "relation": "Mother",
            "phone": "+91-7457105341",
            "email": "guardian70@example.com"
        },
        "contact": {
            "email": "user70@example.com",
            "phone": "+91-7408395286"
        },
        "location": {
            "state": "Punjab",
            "district": "District-20",
            "city": "Jalandhar",
            "pincode": "633715",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 24.3019,
                "lng": 72.2001
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-21T00:00:00",
            "examiner": {
                "name": "Dr. Sanya Agarwal",
                "specialization": "Cardiology",
                "institution": "Max Healthcare"
            },
            "details": {
                "ecgResult": "Normal",
                "cholesterol": "234 mg/dL",
                "heartRate": 90,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Badminton",
                "Running"
            ],
            "screenTimeHours": 6,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-PUNJAB-070"
    },
    {
        "id": "3a132c09-5317-40d5-934a-259c95db1e0f",
        "name": "Aditi Chopra",
        "age": 12,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "12th Grade",
            "rollNumber": "STU2025-6374"
        },
        "guardian": {
            "name": "Vivaan Kapoor",
            "relation": "Father",
            "phone": "+91-7525476950",
            "email": "guardian71@example.com"
        },
        "contact": {
            "email": "user71@example.com",
            "phone": "+91-9249282147"
        },
        "location": {
            "state": "Punjab",
            "district": "District-21",
            "city": "Patiala",
            "pincode": "679054",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 19.2785,
                "lng": 95.6594
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-21T00:00:00",
            "examiner": {
                "name": "Dr. Vihaan Mehta",
                "specialization": "Physiology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "staminaScore": 93,
                "lungCapacity": "4466 ml",
                "flexibilityScore": 85,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Badminton",
                "Basketball"
            ],
            "screenTimeHours": 5,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-PUNJAB-071"
    },
    {
        "id": "79622470-56d7-42d5-b795-048cc95a165c",
        "name": "Pooja Agarwal",
        "age": 16,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "IIT Bombay",
            "grade": "12th Grade",
            "rollNumber": "STU2025-2568"
        },
        "guardian": {
            "name": "Sanya Singh",
            "relation": "Mother",
            "phone": "+91-9567598459",
            "email": "guardian72@example.com"
        },
        "contact": {
            "email": "user72@example.com",
            "phone": "+91-9740321415"
        },
        "location": {
            "state": "Rajasthan",
            "district": "District-22",
            "city": "Jodhpur",
            "pincode": "248205",
            "region": "Rural",
            "coordinates": {
                "lat": 9.3924,
                "lng": 85.3422
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-26T00:00:00",
            "examiner": {
                "name": "Dr. Vihaan Das",
                "specialization": "Physiology",
                "institution": "Max Healthcare"
            },
            "details": {
                "staminaScore": 79,
                "lungCapacity": "3486 ml",
                "flexibilityScore": 85,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Swimming",
                "Running"
            ],
            "screenTimeHours": 6,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-RAJASTHAN-072"
    },
    {
        "id": "5252920d-0946-4a92-84df-76260c4a4ff0",
        "name": "Sanya Kapoor",
        "age": 14,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "IIT Bombay",
            "grade": "1st Year",
            "rollNumber": "STU2025-5398"
        },
        "guardian": {
            "name": "Riya Rao",
            "relation": "Father",
            "phone": "+91-7272542673",
            "email": "guardian73@example.com"
        },
        "contact": {
            "email": "user73@example.com",
            "phone": "+91-8983970170"
        },
        "location": {
            "state": "Karnataka",
            "district": "District-23",
            "city": "Belagavi",
            "pincode": "146962",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 17.4184,
                "lng": 70.5194
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-09T00:00:00",
            "examiner": {
                "name": "Dr. Sanya Kapoor",
                "specialization": "Dental",
                "institution": "Max Healthcare"
            },
            "details": {
                "cavities": 0,
                "bracesRequired": false,
                "gumHealth": "Good",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Badminton",
                "Football"
            ],
            "screenTimeHours": 3,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-KARNATAKA-073"
    },
    {
        "id": "a1c4856f-227a-45bc-9710-cc86d5eaa2e6",
        "name": "Vivaan Agarwal",
        "age": 22,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "NIT Trichy",
            "grade": "10th Grade",
            "rollNumber": "STU2025-8461"
        },
        "guardian": {
            "name": "Ishita Verma",
            "relation": "Guardian",
            "phone": "+91-7247430177",
            "email": "guardian74@example.com"
        },
        "contact": {
            "email": "user74@example.com",
            "phone": "+91-8853787687"
        },
        "location": {
            "state": "Tamil Nadu",
            "district": "District-24",
            "city": "Salem",
            "pincode": "575140",
            "region": "Rural",
            "coordinates": {
                "lat": 31.332,
                "lng": 77.6829
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-18T00:00:00",
            "examiner": {
                "name": "Dr. Pooja Nair",
                "specialization": "Dental",
                "institution": "Max Healthcare"
            },
            "details": {
                "cavities": 4,
                "bracesRequired": true,
                "gumHealth": "Good",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Swimming",
                "Badminton"
            ],
            "screenTimeHours": 5,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-TAMIL NADU-074"
    },
    {
        "id": "d5425a33-d914-4886-92f1-8cde12301a0f",
        "name": "Vihaan Nair",
        "age": 12,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "3rd Year",
            "rollNumber": "STU2025-6194"
        },
        "guardian": {
            "name": "Vihaan Agarwal",
            "relation": "Father",
            "phone": "+91-9702056024",
            "email": "guardian75@example.com"
        },
        "contact": {
            "email": "user75@example.com",
            "phone": "+91-8266784232"
        },
        "location": {
            "state": "Tamil Nadu",
            "district": "District-25",
            "city": "Madurai",
            "pincode": "909914",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 24.2355,
                "lng": 84.4394
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-04T00:00:00",
            "examiner": {
                "name": "Dr. Ananya Mishra",
                "specialization": "Physiology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "staminaScore": 58,
                "lungCapacity": "4203 ml",
                "flexibilityScore": 57,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Badminton",
                "Basketball"
            ],
            "screenTimeHours": 5,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-TAMIL NADU-075"
    },
    {
        "id": "303b4da7-b3ec-4605-a0c0-984dc7344ab2",
        "name": "Aarav Nair",
        "age": 19,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "2nd Year",
            "rollNumber": "STU2025-1340"
        },
        "guardian": {
            "name": "Aditi Nair",
            "relation": "Guardian",
            "phone": "+91-9711521930",
            "email": "guardian76@example.com"
        },
        "contact": {
            "email": "user76@example.com",
            "phone": "+91-8889458924"
        },
        "location": {
            "state": "Rajasthan",
            "district": "District-26",
            "city": "Udaipur",
            "pincode": "799327",
            "region": "Urban",
            "coordinates": {
                "lat": 32.6903,
                "lng": 71.7742
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-10T00:00:00",
            "examiner": {
                "name": "Dr. Diya Mehta",
                "specialization": "Dental",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "cavities": 1,
                "bracesRequired": false,
                "gumHealth": "Average",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Swimming",
                "Football"
            ],
            "screenTimeHours": 2,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-RAJASTHAN-076"
    },
    {
        "id": "c8739e15-59af-48a7-b8dc-ac06ffd05780",
        "name": "Vihaan Malhotra",
        "age": 16,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "NIT Trichy",
            "grade": "1st Year",
            "rollNumber": "STU2025-4891"
        },
        "guardian": {
            "name": "Krishna Rao",
            "relation": "Father",
            "phone": "+91-8686764238",
            "email": "guardian77@example.com"
        },
        "contact": {
            "email": "user77@example.com",
            "phone": "+91-9965531125"
        },
        "location": {
            "state": "Gujarat",
            "district": "District-27",
            "city": "Bhavnagar",
            "pincode": "128964",
            "region": "Urban",
            "coordinates": {
                "lat": 27.7874,
                "lng": 77.6582
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-10-01T00:00:00",
            "examiner": {
                "name": "Dr. Ishita Yadav",
                "specialization": "Full Body",
                "institution": "Fortis"
            },
            "details": {
                "height": "145 cm",
                "weight": "48 kg",
                "bloodGroup": "O+",
                "bmi": 28.0,
                "bloodPressure": "118/60",
                "heartRate": 73,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Basketball",
                "Badminton"
            ],
            "screenTimeHours": 2,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-GUJARAT-077"
    },
    {
        "id": "a5a62bc0-4d13-4129-bcd6-841b728b3e2f",
        "name": "Aditya Nair",
        "age": 13,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "NIT Trichy",
            "grade": "2nd Year",
            "rollNumber": "STU2025-6864"
        },
        "guardian": {
            "name": "Vivaan Mehta",
            "relation": "Father",
            "phone": "+91-9766942601",
            "email": "guardian78@example.com"
        },
        "contact": {
            "email": "user78@example.com",
            "phone": "+91-9804290840"
        },
        "location": {
            "state": "Rajasthan",
            "district": "District-28",
            "city": "Jaipur",
            "pincode": "883558",
            "region": "Urban",
            "coordinates": {
                "lat": 31.9252,
                "lng": 76.2967
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-09T00:00:00",
            "examiner": {
                "name": "Dr. Aditi Malhotra",
                "specialization": "Optical",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "visionLeft": "6/6",
                "visionRight": "6/12",
                "spectaclesRequired": true,
                "colorBlindness": false,
                "summary": "Optical examination done."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Basketball",
                "Football"
            ],
            "screenTimeHours": 7,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-RAJASTHAN-078"
    },
    {
        "id": "59057386-b0b5-40fa-adc5-2b5547ba9f63",
        "name": "Vihaan Singh",
        "age": 17,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "12th Grade",
            "rollNumber": "STU2025-3105"
        },
        "guardian": {
            "name": "Diya Rao",
            "relation": "Mother",
            "phone": "+91-9579211532",
            "email": "guardian79@example.com"
        },
        "contact": {
            "email": "user79@example.com",
            "phone": "+91-8061141115"
        },
        "location": {
            "state": "Tamil Nadu",
            "district": "District-29",
            "city": "Chennai",
            "pincode": "707864",
            "region": "Rural",
            "coordinates": {
                "lat": 35.7064,
                "lng": 87.9969
            }
        },
        "healthReport": {
            "type": "Physiology",
            "date": "2025-09-06T00:00:00",
            "examiner": {
                "name": "Dr. Aarav Singh",
                "specialization": "Physiology",
                "institution": "Max Healthcare"
            },
            "details": {
                "staminaScore": 91,
                "lungCapacity": "3014 ml",
                "flexibilityScore": 88,
                "summary": "Physiology parameters measured."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Basketball",
                "Swimming"
            ],
            "screenTimeHours": 5,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-TAMIL NADU-079"
    },
    {
        "id": "8f1ae65c-e533-402a-9913-bbf08a4dc311",
        "name": "Ananya Agarwal",
        "age": 14,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "Delhi Public School",
            "grade": "12th Grade",
            "rollNumber": "STU2025-7175"
        },
        "guardian": {
            "name": "Aditya Mishra",
            "relation": "Father",
            "phone": "+91-7630465888",
            "email": "guardian80@example.com"
        },
        "contact": {
            "email": "user80@example.com",
            "phone": "+91-8230067666"
        },
        "location": {
            "state": "Delhi",
            "district": "District-30",
            "city": "Dwarka",
            "pincode": "493873",
            "region": "Urban",
            "coordinates": {
                "lat": 31.1865,
                "lng": 79.0164
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-10T00:00:00",
            "examiner": {
                "name": "Dr. Diya Yadav",
                "specialization": "Full Body",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "height": "156 cm",
                "weight": "69 kg",
                "bloodGroup": "AB+",
                "bmi": 24.1,
                "bloodPressure": "111/68",
                "heartRate": 63,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Football",
                "Cricket"
            ],
            "screenTimeHours": 3,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-DELHI-080"
    },
    {
        "id": "21e06232-8963-4c9b-a829-3d97b236be01",
        "name": "Diya Agarwal",
        "age": 13,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "10th Grade",
            "rollNumber": "STU2025-1248"
        },
        "guardian": {
            "name": "Vivaan Verma",
            "relation": "Guardian",
            "phone": "+91-9122560381",
            "email": "guardian81@example.com"
        },
        "contact": {
            "email": "user81@example.com",
            "phone": "+91-7224082405"
        },
        "location": {
            "state": "Karnataka",
            "district": "District-31",
            "city": "Mangaluru",
            "pincode": "686099",
            "region": "Urban",
            "coordinates": {
                "lat": 22.736,
                "lng": 72.7857
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-21T00:00:00",
            "examiner": {
                "name": "Dr. Ishita Iyer",
                "specialization": "Cardiology",
                "institution": "Fortis"
            },
            "details": {
                "ecgResult": "Normal",
                "cholesterol": "150 mg/dL",
                "heartRate": 70,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Basketball",
                "Badminton"
            ],
            "screenTimeHours": 4,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-KARNATAKA-081"
    },
    {
        "id": "a744ddbe-756c-4992-af42-5a0d0548b0ed",
        "name": "Sai Kapoor",
        "age": 20,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "AIIMS Delhi",
            "grade": "3rd Year",
            "rollNumber": "STU2025-5734"
        },
        "guardian": {
            "name": "Sai Iyer",
            "relation": "Father",
            "phone": "+91-9704085742",
            "email": "guardian82@example.com"
        },
        "contact": {
            "email": "user82@example.com",
            "phone": "+91-7322117717"
        },
        "location": {
            "state": "Tamil Nadu",
            "district": "District-32",
            "city": "Tirunelveli",
            "pincode": "720467",
            "region": "Urban",
            "coordinates": {
                "lat": 20.83,
                "lng": 69.9177
            }
        },
        "healthReport": {
            "type": "Neurology",
            "date": "2025-10-01T00:00:00",
            "examiner": {
                "name": "Dr. Vihaan Singh",
                "specialization": "Neurology",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "stressLevel": "Low",
                "memoryTestScore": 100,
                "sleepQuality": "Poor",
                "summary": "Neurological screening completed."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Running",
                "Football"
            ],
            "screenTimeHours": 2,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-TAMIL NADU-082"
    },
    {
        "id": "6b73da39-7e46-44ad-ba4f-05d7dd8f3a67",
        "name": "Riya Mehta",
        "age": 17,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "IIT Bombay",
            "grade": "12th Grade",
            "rollNumber": "STU2025-6649"
        },
        "guardian": {
            "name": "Vivaan Mishra",
            "relation": "Guardian",
            "phone": "+91-8084710890",
            "email": "guardian83@example.com"
        },
        "contact": {
            "email": "user83@example.com",
            "phone": "+91-9435686186"
        },
        "location": {
            "state": "Kerala",
            "district": "District-33",
            "city": "Kozhikode",
            "pincode": "160503",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 35.5718,
                "lng": 91.7684
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-25T00:00:00",
            "examiner": {
                "name": "Dr. Krishna Agarwal",
                "specialization": "Cardiology",
                "institution": "Max Healthcare"
            },
            "details": {
                "ecgResult": "Normal",
                "cholesterol": "198 mg/dL",
                "heartRate": 83,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Running",
                "Badminton"
            ],
            "screenTimeHours": 3,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-KERALA-083"
    },
    {
        "id": "90bd74da-6a87-48b4-8ada-d180ee5ba41e",
        "name": "Vihaan Malhotra",
        "age": 19,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "St. Xavier's College",
            "grade": "2nd Year",
            "rollNumber": "STU2025-6274"
        },
        "guardian": {
            "name": "Ananya Das",
            "relation": "Guardian",
            "phone": "+91-9745522301",
            "email": "guardian84@example.com"
        },
        "contact": {
            "email": "user84@example.com",
            "phone": "+91-7273483787"
        },
        "location": {
            "state": "Gujarat",
            "district": "District-34",
            "city": "Ahmedabad",
            "pincode": "400431",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 17.7418,
                "lng": 83.1458
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-12T00:00:00",
            "examiner": {
                "name": "Dr. Aarav Patel",
                "specialization": "Optical",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "visionLeft": "6/6",
                "visionRight": "6/12",
                "spectaclesRequired": false,
                "colorBlindness": true,
                "summary": "Optical examination done."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Basketball",
                "Swimming"
            ],
            "screenTimeHours": 2,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-GUJARAT-084"
    },
    {
        "id": "45590ed0-bf6f-4ba9-9ad6-831f30be698d",
        "name": "Ananya Das",
        "age": 12,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "2nd Year",
            "rollNumber": "STU2025-2900"
        },
        "guardian": {
            "name": "Aditi Rao",
            "relation": "Guardian",
            "phone": "+91-8139856935",
            "email": "guardian85@example.com"
        },
        "contact": {
            "email": "user85@example.com",
            "phone": "+91-8657421902"
        },
        "location": {
            "state": "Delhi",
            "district": "District-35",
            "city": "Rohini",
            "pincode": "541787",
            "region": "Rural",
            "coordinates": {
                "lat": 34.5671,
                "lng": 70.7921
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-05T00:00:00",
            "examiner": {
                "name": "Dr. Pooja Sharma",
                "specialization": "Optical",
                "institution": "Max Healthcare"
            },
            "details": {
                "visionLeft": "6/6",
                "visionRight": "6/9",
                "spectaclesRequired": false,
                "colorBlindness": true,
                "summary": "Optical examination done."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Badminton",
                "Cricket"
            ],
            "screenTimeHours": 6,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-DELHI-085"
    },
    {
        "id": "11d89fda-051c-4ab3-bbb1-895dd6e72675",
        "name": "Arjun Malhotra",
        "age": 21,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "AIIMS Delhi",
            "grade": "10th Grade",
            "rollNumber": "STU2025-1371"
        },
        "guardian": {
            "name": "Aarav Das",
            "relation": "Mother",
            "phone": "+91-7563871771",
            "email": "guardian86@example.com"
        },
        "contact": {
            "email": "user86@example.com",
            "phone": "+91-8180812966"
        },
        "location": {
            "state": "West Bengal",
            "district": "District-36",
            "city": "Durgapur",
            "pincode": "136442",
            "region": "Rural",
            "coordinates": {
                "lat": 27.0099,
                "lng": 90.1405
            }
        },
        "healthReport": {
            "type": "Neurology",
            "date": "2025-09-03T00:00:00",
            "examiner": {
                "name": "Dr. Pooja Kapoor",
                "specialization": "Neurology",
                "institution": "Max Healthcare"
            },
            "details": {
                "stressLevel": "Moderate",
                "memoryTestScore": 65,
                "sleepQuality": "Good",
                "summary": "Neurological screening completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Running",
                "Basketball"
            ],
            "screenTimeHours": 4,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-WEST BENGAL-086"
    },
    {
        "id": "30673d5e-6a89-444d-b952-d00bbddcde6d",
        "name": "Ishita Kapoor",
        "age": 17,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "Delhi Public School",
            "grade": "9th Grade",
            "rollNumber": "STU2025-8888"
        },
        "guardian": {
            "name": "Aditi Nair",
            "relation": "Guardian",
            "phone": "+91-9353372202",
            "email": "guardian87@example.com"
        },
        "contact": {
            "email": "user87@example.com",
            "phone": "+91-9556299069"
        },
        "location": {
            "state": "Maharashtra",
            "district": "District-37",
            "city": "Aurangabad",
            "pincode": "487317",
            "region": "Rural",
            "coordinates": {
                "lat": 16.4378,
                "lng": 86.5513
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-19T00:00:00",
            "examiner": {
                "name": "Dr. Sanya Patel",
                "specialization": "Optical",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "visionLeft": "6/12",
                "visionRight": "6/12",
                "spectaclesRequired": true,
                "colorBlindness": false,
                "summary": "Optical examination done."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Football",
                "Cricket"
            ],
            "screenTimeHours": 8,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-MAHARASHTRA-087"
    },
    {
        "id": "0bb5c5e2-f3c3-4043-aa7f-99e2efede3b0",
        "name": "Riya Rao",
        "age": 19,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "Delhi Public School",
            "grade": "12th Grade",
            "rollNumber": "STU2025-3822"
        },
        "guardian": {
            "name": "Vivaan Rao",
            "relation": "Mother",
            "phone": "+91-8277984820",
            "email": "guardian88@example.com"
        },
        "contact": {
            "email": "user88@example.com",
            "phone": "+91-8567241750"
        },
        "location": {
            "state": "Uttar Pradesh",
            "district": "District-38",
            "city": "Kanpur",
            "pincode": "919326",
            "region": "Rural",
            "coordinates": {
                "lat": 25.8029,
                "lng": 77.4036
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-05T00:00:00",
            "examiner": {
                "name": "Dr. Arjun Mishra",
                "specialization": "Optical",
                "institution": "Fortis"
            },
            "details": {
                "visionLeft": "6/9",
                "visionRight": "6/6",
                "spectaclesRequired": true,
                "colorBlindness": true,
                "summary": "Optical examination done."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Basketball",
                "Badminton"
            ],
            "screenTimeHours": 2,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-UTTAR PRADESH-088"
    },
    {
        "id": "519e2703-b078-4254-be75-085d244c96f2",
        "name": "Sai Rao",
        "age": 17,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "Delhi Public School",
            "grade": "1st Year",
            "rollNumber": "STU2025-5823"
        },
        "guardian": {
            "name": "Aarav Chopra",
            "relation": "Father",
            "phone": "+91-9373618027",
            "email": "guardian89@example.com"
        },
        "contact": {
            "email": "user89@example.com",
            "phone": "+91-7146579984"
        },
        "location": {
            "state": "Rajasthan",
            "district": "District-39",
            "city": "Kota",
            "pincode": "481905",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 30.3757,
                "lng": 83.7905
            }
        },
        "healthReport": {
            "type": "Neurology",
            "date": "2025-09-30T00:00:00",
            "examiner": {
                "name": "Dr. Ananya Kapoor",
                "specialization": "Neurology",
                "institution": "Max Healthcare"
            },
            "details": {
                "stressLevel": "High",
                "memoryTestScore": 65,
                "sleepQuality": "Average",
                "summary": "Neurological screening completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Cricket",
                "Basketball"
            ],
            "screenTimeHours": 4,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-RAJASTHAN-089"
    },
    {
        "id": "7c1ce5d1-1786-4cb9-b2b4-578f98e36415",
        "name": "Aditya Mishra",
        "age": 12,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "NIT Trichy",
            "grade": "11th Grade",
            "rollNumber": "STU2025-8243"
        },
        "guardian": {
            "name": "Aarav Singh",
            "relation": "Guardian",
            "phone": "+91-7032233633",
            "email": "guardian90@example.com"
        },
        "contact": {
            "email": "user90@example.com",
            "phone": "+91-7713843902"
        },
        "location": {
            "state": "Karnataka",
            "district": "District-40",
            "city": "Bengaluru",
            "pincode": "391614",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 22.9501,
                "lng": 83.0853
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-02T00:00:00",
            "examiner": {
                "name": "Dr. Vihaan Agarwal",
                "specialization": "Full Body",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "height": "155 cm",
                "weight": "68 kg",
                "bloodGroup": "O+",
                "bmi": 16.2,
                "bloodPressure": "113/85",
                "heartRate": 64,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Swimming",
                "Cricket"
            ],
            "screenTimeHours": 2,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-KARNATAKA-090"
    },
    {
        "id": "ef7b165f-437c-4d34-bd57-d13cb63454d7",
        "name": "Ananya Malhotra",
        "age": 20,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "AIIMS Delhi",
            "grade": "9th Grade",
            "rollNumber": "STU2025-8083"
        },
        "guardian": {
            "name": "Arjun Singh",
            "relation": "Guardian",
            "phone": "+91-9190963397",
            "email": "guardian91@example.com"
        },
        "contact": {
            "email": "user91@example.com",
            "phone": "+91-7830115604"
        },
        "location": {
            "state": "Kerala",
            "district": "District-41",
            "city": "Alappuzha",
            "pincode": "106178",
            "region": "Rural",
            "coordinates": {
                "lat": 33.075,
                "lng": 92.1123
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-10T00:00:00",
            "examiner": {
                "name": "Dr. Aditi Das",
                "specialization": "Cardiology",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "ecgResult": "Normal",
                "cholesterol": "177 mg/dL",
                "heartRate": 90,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Badminton",
                "Swimming"
            ],
            "screenTimeHours": 2,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-KERALA-091"
    },
    {
        "id": "3cf4d95b-750b-4246-9939-77a759c530d2",
        "name": "Meera Rao",
        "age": 16,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "NIT Trichy",
            "grade": "11th Grade",
            "rollNumber": "STU2025-3928"
        },
        "guardian": {
            "name": "Aditya Singh",
            "relation": "Guardian",
            "phone": "+91-7859847780",
            "email": "guardian92@example.com"
        },
        "contact": {
            "email": "user92@example.com",
            "phone": "+91-9731636283"
        },
        "location": {
            "state": "Maharashtra",
            "district": "District-42",
            "city": "Nashik",
            "pincode": "586815",
            "region": "Urban",
            "coordinates": {
                "lat": 36.8289,
                "lng": 72.3054
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-21T00:00:00",
            "examiner": {
                "name": "Dr. Arjun Mishra",
                "specialization": "Full Body",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "height": "159 cm",
                "weight": "50 kg",
                "bloodGroup": "B+",
                "bmi": 20.2,
                "bloodPressure": "117/77",
                "heartRate": 71,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Swimming",
                "Cricket"
            ],
            "screenTimeHours": 2,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-MAHARASHTRA-092"
    },
    {
        "id": "38ff80ce-1ea5-4ffe-b175-2de21ea3d2eb",
        "name": "Ishita Sharma",
        "age": 14,
        "gender": "Female",
        "institution": {
            "type": "School",
            "name": "IIT Bombay",
            "grade": "10th Grade",
            "rollNumber": "STU2025-1741"
        },
        "guardian": {
            "name": "Krishna Mishra",
            "relation": "Father",
            "phone": "+91-8900324022",
            "email": "guardian93@example.com"
        },
        "contact": {
            "email": "user93@example.com",
            "phone": "+91-8987472617"
        },
        "location": {
            "state": "Delhi",
            "district": "District-43",
            "city": "Connaught Place",
            "pincode": "213300",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 19.4923,
                "lng": 76.2731
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-27T00:00:00",
            "examiner": {
                "name": "Dr. Riya Patel",
                "specialization": "Cardiology",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "ecgResult": "Irregular",
                "cholesterol": "166 mg/dL",
                "heartRate": 84,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Running",
                "Badminton"
            ],
            "screenTimeHours": 5,
            "sleepHours": 5
        },
        "campaignId": "HCAMP2025-DELHI-093"
    },
    {
        "id": "20cc5126-e935-4a03-90e6-2cfd28acc518",
        "name": "Vihaan Nair",
        "age": 14,
        "gender": "Male",
        "institution": {
            "type": "College",
            "name": "AIIMS Delhi",
            "grade": "2nd Year",
            "rollNumber": "STU2025-1885"
        },
        "guardian": {
            "name": "Diya Malhotra",
            "relation": "Guardian",
            "phone": "+91-7377596137",
            "email": "guardian94@example.com"
        },
        "contact": {
            "email": "user94@example.com",
            "phone": "+91-8854792698"
        },
        "location": {
            "state": "Kerala",
            "district": "District-44",
            "city": "Kochi",
            "pincode": "232785",
            "region": "Urban",
            "coordinates": {
                "lat": 15.6117,
                "lng": 90.7691
            }
        },
        "healthReport": {
            "type": "Optical",
            "date": "2025-09-30T00:00:00",
            "examiner": {
                "name": "Dr. Aditi Rao",
                "specialization": "Optical",
                "institution": "Fortis"
            },
            "details": {
                "visionLeft": "6/6",
                "visionRight": "6/12",
                "spectaclesRequired": false,
                "colorBlindness": true,
                "summary": "Optical examination done."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Swimming",
                "Badminton"
            ],
            "screenTimeHours": 6,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-KERALA-094"
    },
    {
        "id": "66c15e44-cdc8-4906-9a9d-e7ff4c610f91",
        "name": "Ishita Verma",
        "age": 15,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "NIT Trichy",
            "grade": "2nd Year",
            "rollNumber": "STU2025-5308"
        },
        "guardian": {
            "name": "Aditi Mehta",
            "relation": "Mother",
            "phone": "+91-9104877604",
            "email": "guardian95@example.com"
        },
        "contact": {
            "email": "user95@example.com",
            "phone": "+91-9684942350"
        },
        "location": {
            "state": "Maharashtra",
            "district": "District-45",
            "city": "Nagpur",
            "pincode": "347428",
            "region": "Urban",
            "coordinates": {
                "lat": 15.3731,
                "lng": 77.6682
            }
        },
        "healthReport": {
            "type": "Cardiology",
            "date": "2025-09-09T00:00:00",
            "examiner": {
                "name": "Dr. Aditya Mehta",
                "specialization": "Cardiology",
                "institution": "Max Healthcare"
            },
            "details": {
                "ecgResult": "Normal",
                "cholesterol": "206 mg/dL",
                "heartRate": 97,
                "summary": "Cardiology checkup complete."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Cricket",
                "Swimming"
            ],
            "screenTimeHours": 6,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-MAHARASHTRA-095"
    },
    {
        "id": "1dd2330f-16a2-460a-b791-779c00476a86",
        "name": "Aditya Singh",
        "age": 19,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "St. Xavier's College",
            "grade": "10th Grade",
            "rollNumber": "STU2025-9650"
        },
        "guardian": {
            "name": "Vihaan Iyer",
            "relation": "Mother",
            "phone": "+91-7504573490",
            "email": "guardian96@example.com"
        },
        "contact": {
            "email": "user96@example.com",
            "phone": "+91-8920255747"
        },
        "location": {
            "state": "West Bengal",
            "district": "District-46",
            "city": "Kolkata",
            "pincode": "947794",
            "region": "Urban",
            "coordinates": {
                "lat": 35.4761,
                "lng": 86.8088
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-17T00:00:00",
            "examiner": {
                "name": "Dr. Diya Mehta",
                "specialization": "Full Body",
                "institution": "Apollo Hospitals"
            },
            "details": {
                "height": "165 cm",
                "weight": "84 kg",
                "bloodGroup": "A-",
                "bmi": 21.7,
                "bloodPressure": "106/77",
                "heartRate": 90,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Mixed",
            "sports": [
                "Football",
                "Badminton"
            ],
            "screenTimeHours": 3,
            "sleepHours": 7
        },
        "campaignId": "HCAMP2025-WEST BENGAL-096"
    },
    {
        "id": "04d13a69-f665-4a2a-b308-7a92cf3630e5",
        "name": "Arjun Verma",
        "age": 12,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "IIT Bombay",
            "grade": "11th Grade",
            "rollNumber": "STU2025-6382"
        },
        "guardian": {
            "name": "Diya Chopra",
            "relation": "Mother",
            "phone": "+91-9569638985",
            "email": "guardian97@example.com"
        },
        "contact": {
            "email": "user97@example.com",
            "phone": "+91-9079942063"
        },
        "location": {
            "state": "West Bengal",
            "district": "District-47",
            "city": "Siliguri",
            "pincode": "919500",
            "region": "Urban",
            "coordinates": {
                "lat": 31.4964,
                "lng": 83.3598
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-26T00:00:00",
            "examiner": {
                "name": "Dr. Sanya Agarwal",
                "specialization": "Full Body",
                "institution": "AIIMS Delhi"
            },
            "details": {
                "height": "150 cm",
                "weight": "54 kg",
                "bloodGroup": "O-",
                "bmi": 20.6,
                "bloodPressure": "103/63",
                "heartRate": 77,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Non-Vegetarian",
            "sports": [
                "Football",
                "Cricket"
            ],
            "screenTimeHours": 6,
            "sleepHours": 6
        },
        "campaignId": "HCAMP2025-WEST BENGAL-097"
    },
    {
        "id": "9d37466e-4448-4125-9fec-838a30efcddb",
        "name": "Aditi Iyer",
        "age": 20,
        "gender": "Male",
        "institution": {
            "type": "School",
            "name": "IIT Bombay",
            "grade": "11th Grade",
            "rollNumber": "STU2025-3300"
        },
        "guardian": {
            "name": "Vihaan Patel",
            "relation": "Mother",
            "phone": "+91-8792025012",
            "email": "guardian98@example.com"
        },
        "contact": {
            "email": "user98@example.com",
            "phone": "+91-9423135685"
        },
        "location": {
            "state": "Delhi",
            "district": "District-48",
            "city": "Saket",
            "pincode": "381775",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 29.3782,
                "lng": 91.1648
            }
        },
        "healthReport": {
            "type": "Full Body",
            "date": "2025-09-21T00:00:00",
            "examiner": {
                "name": "Dr. Sanya Chopra",
                "specialization": "Full Body",
                "institution": "Max Healthcare"
            },
            "details": {
                "height": "173 cm",
                "weight": "40 kg",
                "bloodGroup": "A+",
                "bmi": 17.0,
                "bloodPressure": "100/82",
                "heartRate": 64,
                "summary": "Healthy with normal parameters."
            },
            "followUpRequired": true
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Football",
                "Badminton"
            ],
            "screenTimeHours": 5,
            "sleepHours": 8
        },
        "campaignId": "HCAMP2025-DELHI-098"
    },
    {
        "id": "2f441435-7be9-46f7-acdd-4feef47a734b",
        "name": "Riya Agarwal",
        "age": 14,
        "gender": "Female",
        "institution": {
            "type": "College",
            "name": "NIT Trichy",
            "grade": "1st Year",
            "rollNumber": "STU2025-3017"
        },
        "guardian": {
            "name": "Diya Verma",
            "relation": "Guardian",
            "phone": "+91-9896662248",
            "email": "guardian99@example.com"
        },
        "contact": {
            "email": "user99@example.com",
            "phone": "+91-9444182349"
        },
        "location": {
            "state": "Gujarat",
            "district": "District-49",
            "city": "Rajkot",
            "pincode": "995012",
            "region": "Semi-Urban",
            "coordinates": {
                "lat": 31.7836,
                "lng": 85.0349
            }
        },
        "healthReport": {
            "type": "Dental",
            "date": "2025-09-04T00:00:00",
            "examiner": {
                "name": "Dr. Sai Malhotra",
                "specialization": "Dental",
                "institution": "Fortis"
            },
            "details": {
                "cavities": 0,
                "bracesRequired": true,
                "gumHealth": "Average",
                "summary": "Dental check completed."
            },
            "followUpRequired": false
        },
        "lifestyle": {
            "diet": "Vegetarian",
            "sports": [
                "Running",
                "Swimming"
            ],
            "screenTimeHours": 4,
            "sleepHours": 9
        },
        "campaignId": "HCAMP2025-GUJARAT-099"
    }
]