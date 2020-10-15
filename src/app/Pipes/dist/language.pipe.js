"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LanguagePipe = void 0;
var core_1 = require("@angular/core");
var LanguagePipe = /** @class */ (function () {
    function LanguagePipe() {
        this.hi = {
            // "":"",
            "Overall": "संपूर्ण",
            "Ambience": "माहौल",
            "Corona Safety": "कोरोना सुरक्षा",
            "Waiting": "इंतज़ार",
            "Create": "बनाए",
            "Offers": "ऑफर",
            "Deal Amount": "सौदा राशि",
            "Discount Value": "डिस्काउंट मूल्य",
            "Discount By": "छूट द्वारा",
            "BuynGet": "खरीदें और पाएं",
            "Combo": "कॉम्बो",
            "Package": "पैकेज",
            "Flat Discount": "फ्लैट डिस्काउंट",
            "Select Services": "सेवाओं का चयन करें",
            "Occassion": "अवसर",
            "Deal/Offer Applied": "डील / ऑफ़र लागू",
            "Package/Combo": "पैकेज / कॉम्बो",
            "View Deals": "डील देखें",
            "Select Staff Name": "स्टाफ का नाम चुनें",
            "Search by Staff": "स्टाफ द्वारा खोजें",
            "Create Offers": "ऑफ़र बनाएँ",
            "Create Deals": "डील बनाएं",
            "Yes": "हाँ",
            "No": "नहीं",
            "Do you provide accommodation?": "क्या आप आवास प्रदान करते हैं?",
            "Do you provide incentive?": "क्या आप प्रोत्साहन प्रदान करते हैं?",
            "Apply": "लागू",
            "Grand Total": "कुल योग",
            "Total Amount": "कुल रकम",
            "View Offers": "ऑफ़र देखें",
            "Available Stylist": "उपलब्ध स्टाइलिस्ट",
            "Do you want to select a Deal?": "क्या आप डील का चयन करना चाहते हैं?",
            "Business Website": "व्यवसाय वेबसाइट",
            "Youtube Channel": "यूट्यूब चैनल",
            "Instagram Page": "इंस्टाग्राम पेज",
            "Facebook Page": "फेसबुक पेज",
            "Social Media Links": "सोशल मीडिया लिंक",
            "Select Preferred Brands": "पसंदीदा ब्रांडों का चयन करें",
            "Select Facilities": "सुविधाओं का चयन करें",
            "Salon Type": "सैलून प्रकार",
            "Other": "अन्य",
            "Referral": "रेफरल",
            "User": "उपयोगकर्ता",
            "How many loyalty points will be rewarded on checkout to referral user?": "रेफरल उपयोगकर्ता को चेकआउट पर कितने वफादारी अंक दिए जाएंगे?",
            "Do you want to send loyalty points to referral?": "क्या आप रेफ़रल में लॉयल्टी पॉइंट भेजना चाहते हैं?",
            "Max amount to apply from loyalty points": "वफादारी अंक से लागू करने के लिए अधिकतम राशि",
            "One loyalty point equals to how many ₹": "एक वफादारी कितने रुपए के बराबर है",
            "How many loyalty points will be rewarded on checkout?": "चेकआउट पर कितने वफादारी अंक दिए जाएंगे?",
            "Salon Code": "सैलून कोड",
            "Do you want to give loyalty points to your customers?": "क्या आप अपने ग्राहकों को वफादारी अंक देना चाहते हैं?",
            "Business Settings": "व्यवसाय सेटिंग्स",
            "Mobile Number": "मोबाइल नंबर",
            "Password": "पासवर्ड",
            "Show Password": "पासवर्ड देखे",
            "Forgot password": "पासवर्ड भूल गए ?",
            "Login": "लॉगइन करें",
            "Do not have an account?": "क्या आपका अकाउंट नहीं है?",
            "Register": "रजिस्टर करें",
            "Screen 2": "Register Screen",
            "Language": "भाषा",
            'English': "अंग्रेज़ी",
            "Name": "नाम",
            "Already Member": "पहले से अकाउंट है ?",
            "Screen 3": "Merchant Signup",
            "Business": "बिज़नेस",
            "Type": "प्रकार",
            "Service": "सर्विस ",
            "Tell us about your business": "हमें अपने बिज़नेस के बारे में बताएं।",
            "Businessinfo": "व्यवसाय की जानकारी",
            "Business Name": "व्यवसाय का नाम",
            "Business Phone": "व्यवसाय का कांटेक्ट नंबर",
            "Business Address": "व्यवसाय का एड्रेस (पता) ",
            "Tell us about You": "हमें अपने व्यवसाय के बारे में बताएं।",
            "STATE": "राज्य का नाम",
            "State": "राज्य का नाम",
            "City": "शहर का नाम",
            "CITY": "शहर का नाम",
            "PINCODE": "शहर का पिनकोड",
            "Save About": "सेव करें",
            "Save": "सेव करें",
            "ABOUT US": "हमारे बारे में",
            "About Business": "व्यापार जानकारी",
            "Offers/ Deals": "ऑफ़र / डील्स",
            "Offers/Deals": "ऑफ़र / डील्स",
            "Pincode": "शहर का पिनकोड",
            "MAP LOCATION": "नक़्शे पर चिन्हित करे",
            "BUSINESS EMAIL": "व्यवसाय का ईमेल",
            "Business Email": "व्यवसाय का ईमेल",
            "Freelancer Email": "फ्रीलांसर का ईमेल",
            "Post Job": "नौकरी पोस्ट करें",
            "EST DATE": "व्यवसाय प्रारम्भ दिनांक ",
            "Next": "जारी रखे",
            "Select Custom Dates": "कस्टम तिथियों का चयन करें",
            "Stylist Name": "स्टाइलिस्ट का नाम",
            "BELOW ARE THE JOB DETAILS": "नौकरी का विवरण",
            "JOB Title": "नौकरी का नाम",
            "JOB TYPE": "कार्य का प्रकार",
            'JOB CATEGORY': "नौकरी श्रेणी",
            "POP UP": "Business Registration",
            "Current Address Info": "वर्तमान पता",
            "I have read and agree with all Terms and Conditions": "मैंने सभी नियम और शर्तों को पढ़ा और उनसे सहमत हूं|",
            "Address": "पता",
            "Zip Code": "पिन कोड",
            "Landmark": "सीमा चिन्ह",
            "Email": "ईमेल",
            "Current Salary": "वर्तमान वेतन",
            "About Yourself": "अपने बारे में",
            "Skills/Qualification": "कौशल / योग्यता",
            "Skills": "कौशल",
            "Skill": "कौशल",
            "Employment Type": "रोजगार के प्रकार",
            "Industry Type": "उद्योग के प्रकार",
            "Experience (in Years)": "अनुभव (वर्षों में)",
            "Experience": "अनुभव",
            "Qualification": "योग्यता",
            "Select Employeer": "नियोक्ता का चयन करें",
            "Permanent Address Info": "स्थायी पता",
            "Permanent Add. Same As Current Add.": "स्थायी पता वर्तमान पते के समान।",
            "Confirm": "पुष्टि करें ",
            "Change": "बदले  ",
            "Payments": "भुगतान",
            "Hours": "समय ",
            "Set Your": "अपने बिज़नेस की",
            "business hours": "समय निर्धारित करें",
            "All Day": "सभी दिन ",
            "all day": "सभी दिन ",
            "Week": "सप्ताह ",
            "Opening time": "खुलने का समय ",
            "Closing time": "बंद होने का समय ",
            "SUN": "रविवार ",
            "MON": "सोमवार",
            "TUE": "मंगलवार",
            "WED": "बुधवार",
            "THU": "गुरूवार",
            "FRI": "शुक्रवार",
            "SAT": "शनिवार",
            "Select Your Type": "आप द्वारा दी जाने वाली सर्विस का चुनाव।  ",
            "Services": "सर्विस ",
            "Add the Services you Offer": "आप द्वारा दी जाने वाली सर्विसेज को जोड़े।",
            "Do not worry- you will be able to edit these later": "आप इन सर्विसेज को पुनः बदल/जोड़ पाएंगे।",
            "I have read and agree with": "मैंने सभी नियमों और शर्तों को पढ़ा और उनसे सहमत हूं।",
            "Click here": "यहाँ क्लिक करें",
            "Stylist SignUp": "स्टाइलिस्ट साइनअप",
            "Basic Information": "मूलभूत जानकारी",
            "Submit ": "रक्षित करे",
            "MANUAL CHECKOUT": "मैनुअल चेक आउट",
            "List": "सूची",
            "Please first accept terms and condition": "कृपया पहले नियम और शर्ते स्वीकार करें।",
            "Business Home Page": "बिजनेस होम पेज",
            "Accept": "स्वीकार करे",
            "Bookings": "अपॉइंटमेंट",
            "Today": "आज के दिन",
            "TODAY": "आज के दिन",
            "Confirmed": "कनफर्म्ड",
            "Pending": "पेंडिंग",
            "FAQs": "पूछे जाने वाले प्रश्न",
            "Total Work": "कुल कार्य",
            "CRM": "ग्राहक व बिज़नेस मैनेजर ",
            "My Employer": "मेरा एम्प्लॉयर",
            "Festival wishes": "शुभकामनाये",
            "Offer/Deal": "ऑफर/डील",
            "Offer": "ऑफर",
            "Services Menu": "सर्विसेज मेनू",
            "NEWS": "ब्यूटी न्यूज़",
            "BLOGS": "ब्यूटी ब्लोग्स",
            "Blogs": "ब्लोग्स",
            "EVENTS": "ब्यूटी इवेंट्स",
            "Home": "होम पेज",
            "Billings": "बिल",
            "Job Portal": "जॉब पोर्टल",
            "Add New": "नया जोड़ें",
            "About": "हमे जानिए",
            "Vision/Mission": "हमारा विज़न/मिशन",
            "Share App": "शेयर App",
            "Share": "शेयर",
            "FAQ": "सामान्य प्रश्न",
            "Contact us/Help": "संपर्क करें",
            "Contact Us/Help": "संपर्क करें",
            "Terms and condition": "नियम व शर्तें",
            "Terms And Condition": "नियम व शर्तें",
            "Privacy policy": "गोपनीयता नीति",
            "Privacy Policy": "गोपनीयता नीति",
            "My Salon Zone": "माय सैलून जोन",
            "Disclaimer": "अस्वीकरण",
            "Logout": "लॉग आउट",
            "Forgot Password": "पासवर्ड भूल गए",
            "News": "ब्यूटी न्यूज़",
            "Top News": "मुख्य समाचार",
            "Know More": "पूरा पढ़िए",
            "News & Details": "समाचार  विवरण",
            "Notifications": "सूचनाएं",
            "Mark All Read": "सभी को पढ़ा दिखाएं",
            "Blog Detail": "ब्लॉग विवरण",
            "Events": "ब्यूटी इवेंट्स",
            "Top Events": "मुख्य आयोजन",
            "Festival & Wishes": "त्योहार और शुभकामनाएँ",
            "Change Image": "चित्र को बदलें",
            "TOP BLOGS": "मुख्य लेख",
            "Top Blogs": "मुख्य लेख",
            "Add Expense Info": "व्यय जानकारी जोड़ें",
            "Add Template": "टेम्पलेट जोड़ें",
            "Customer": "ग्राहक",
            "Add New Template": "नया टेम्पलेट जोड़ें",
            "Add new Customer": "नया ग्राहक जोड़ें",
            "Add New Customer": "नया ग्राहक जोड़ें",
            "Enter Name": "नाम लिखे",
            "Enter Mobile Number": "मोबाइल नंबर जोड़े",
            "Male": "पुरुष",
            "Female": "महिला ",
            "Enter DOB": "जन्म दिनांक जोड़े",
            "Submit": "सुरक्षित करें ",
            "Back": "पीछे जाये",
            "Please wait": "कृपया प्रतीक्षा कीजिये ",
            "Customer added sucesfully": "ग्राहक विवरण सफलतापूर्वक जोड़ा गया",
            "Mon": "सोम",
            "Tue": " मंगल",
            "Wed": " बुध",
            "Thu": " गुरु ",
            "Fri": "शुक्र",
            "Sat": " शनि ",
            "Customer Name": "ग्राहक का नाम",
            "Customer Mobile Number": "ग्राहक का मोबाइल नंबर",
            "Phone Number": "मोबाइल नंबर",
            "Customer Mobile": "ग्राहक का मोबाइल नंबर",
            "Customer Email": "ग्राहक की ईमेल ID",
            "Gender": "लिंग ",
            "Available Stylish": "उपलब्ध स्टाइलिस्ट",
            "Select Service": "सर्विस का चुनाव ",
            "Available stylist": "उपलब्ध स्टाइलिस्ट",
            "Book Now": "सुरक्षित करें ",
            "Appointment added sucessfully": "अपॉइंटमेंट सफलतापूर्वक जोड़ा गया",
            "Billing": "बिलिंग",
            "Manually": "मैन्युअली",
            "Add more": "और जोड़े",
            "Add More": "और जोड़े ",
            "Total": "कुल ",
            "Discount": "छूट ",
            "Selected stylist": "चयनित स्टाइलिस्ट ",
            "Payment": "भुगतान",
            "Paytm": "Paytm",
            "cash": "नकद ",
            "Cash": "नकद ",
            "Google pay": "UPI",
            'Google Pay': "Google पे",
            "Are you sure you want to checkout this appointment": "क्या आप इस अपॉइंटमेंट का बिल बनाना चाहते है ?",
            "OK": "ओके ",
            "ok": "ओके ",
            "Ok": "ओके ",
            "Cancel": "रद्द करे ",
            "My Contacts": "मेरे संपर्क",
            "Coupons": "कूपन",
            "Apply Now": "अभी आवेदन करें",
            "NEXT": "जारी रखे",
            "Applicant Detail": "आवेदक की जानकारी",
            "Applicant": "आवेदक",
            "Open Jobs": "ओपन जॉब्स",
            "Checkout": "चेक आउट",
            "Checkout sucessful": "बिल सफलतापूर्वक बनाया गया ",
            "Send Receipt": "रसीद भेजें ",
            "Finish": "समाप्त  करे ",
            "Business Manager": "बिज़नेस मैनेजर ",
            "Customer Manager": "ग्राहक प्रबंधन",
            "Reviews & Ratings Manager": "रिव्यु  एंड रेटिंग मैनेजर ",
            "Manage Employees": "कर्मचारी प्रबंधन",
            "Manage Employee": "कर्मचारी को प्रबंधित करें",
            "Reports": "रिपोर्ट्स ",
            "Business Profile": "व्यापार प्रोफ़ाइल",
            "Employeer Profile": "नियोक्ता प्रोफ़ाइल",
            "Employeer": "नियोक्ता",
            "Edit Profile": "प्रोफाइल एडिट करें",
            "Edit About": "बिज़नेस के बारे में",
            "Post a Job": "नौकरी पोस्ट करो",
            "Daily Ledger": "बही खाता",
            "Template Manager": "टेम्पलेट मैनेजर",
            "Customer List": "ग्राहक सूचि",
            "All Open Jobs": "सभी ओपन जॉब्स",
            "Send Offer & Deals": "ऑफर व डील भेजे",
            "Deal": "डील",
            "Deals": "डील",
            "Title": "शीर्षक",
            "Description": "विवरण",
            "Enter Coupon Code": "कूपन कोड डालें",
            "Checkout Success": "बिल सफलतापूर्वक बनाया गया",
            "Notify": "सूचित करें",
            "Coupon Code": "कूपन कोड",
            "Start Date": "आरंभ करने की तिथि",
            "Valid till": "इस तिथि तक मान्य",
            "End Date": "अंतिम तिथि",
            "Coupon Usage": "कूपन उपयोग",
            "Once Per Use": "एक बार प्रति उपयोग",
            "Multiple Time Per User": "उपयोगकर्ता प्रति कई बार",
            "Discount Type": "डिस्काउंट प्रकार",
            "Applicable Service": "लागू सेवा",
            "Special Service": "विशेष सेवा",
            "New User Only": "नया उपयोगकर्ता केवल",
            "Per User Usage": "प्रति उपयोगकर्ता उपयोग",
            "Complete Bill": "पूरा बिल",
            "Apply Setting": "सेटिंग लागू करें",
            "Enter New Password": "नया पासवर्ड दर्ज करें",
            "Send": "भेजे",
            "Customer History": "ग्राहक हिस्ट्री ",
            "Upcoming Birthday": "आगामी जन्मदिन",
            "Birthdays": "जन्मदिन",
            "Thanks you SMS": "धन्यवाद SMS",
            "Thank you SMS": "धन्यवाद SMS",
            "Thank You SMS": "धन्यवाद SMS",
            "Important Days": "महत्वपूर्ण दिन",
            "Select Template": "टेम्पलेट का चयन करें",
            "Search For Customer": "ग्राहक खोजें",
            "Feature coming soon ": "जल्द ही आने वाला फीचर ",
            "Feature Coming Soon ": "जल्द ही आने वाला फीचर ",
            "Festivals": "त्योहार",
            "Send Wish": "शुभकामनाएँ भेजें",
            "birthday": "जन्मदिन",
            "surprise ": "सरप्राइज करे",
            "Surprise": "सरप्राइज करे",
            "Employee list": "कर्मचारी सूचि ",
            "Employee List": "कर्मचारी सूचि ",
            "Add New Employee": "नया कर्मचारी जोड़ें",
            "Attendance Management": "उपस्थिति प्रबंधन",
            "Attendance": "उपस्थिति",
            "Salary Management": "वेतन प्रबंधन",
            "Present": "उपस्थिति",
            "Total Working Days": "कुल कार्य दिवस",
            "Reply": "जवाब दे",
            "My Employeer": "मेरा एम्प्लॉयर",
            "Total Holidays": "कुल अवकाश",
            "Total Present": "कुल उपस्थिति",
            "Absent": "अनुपस्थित",
            "Holiday": "अवकाश",
            "My Work Experience": "मेरा कार्य अनुभव",
            "Reviews and Ratings": "समीक्षा और रेटिंग",
            "My Work": "मेरा काम",
            "Attendance Summary": "उपस्थिति सारांश",
            "Past Employee": "पिछले कर्मचारी",
            "Employer Profile": "एम्प्लॉयर प्रोफ़ाइल",
            "Status": "स्थिति",
            "Past Employees": "पिछले कर्मचारी ",
            "Duration": "सेवाकाल ",
            "Apply Job": "नौकरी आवेदन",
            "Find candidate": "उम्मीदवार ढूंढे ",
            "Find Candidate": "उम्मीदवार ढूंढे ",
            "Call": "कॉल करे ",
            "more": "अधिक जानकारी ",
            "Job Openings": "नौकरियां",
            "The Appointment For": "के लिए नियुक्ति",
            "Job Detai": "नौकरी विवरण",
            "More": "अधिक जानकारी ",
            "Offers & Deals": "ऑफ़र और डील्स",
            "Applied Jobs": "आवेदित नौकरियां",
            "Featured Job": "विशेष नौकरी",
            "Featured Jobs": "विशेष नौकरी",
            "Total Income": "कुल आय ",
            "Income": "आय",
            "Total expense": "कुल खर्च ",
            "Total appointments": "कुल अपॉइंटमेंट",
            "Total Appointments": "कुल अपॉइंटमेंट",
            "Are You Sure you want to Cancel this Appointment": "क्या आप सुनिश्चित हैं कि आप इस नियुक्ति को रद्द करना चाहते हैं?",
            "New customer": "नए ग्राहक ",
            "Resume Generator": "बायोडाटा जनरेटर",
            "New Customer": "नए ग्राहक ",
            "Total employee": "कुल कर्मचारी ",
            "Total Employees": "कुल कर्मचारी ",
            "Details": "विवरण ",
            "Daily": "दैनिक",
            "Weekly": "साप्ताहिक ",
            "Contact Details": "संपर्क विवरण",
            "Monthly": "मासिक ",
            "Email Address": "ईमेल पता",
            "Other Information": "अन्य सूचना",
            "custom dates": "समय अवधि खुद चुने",
            "Registration Details": "पंजीकरण के विवरण",
            "Custom Date": "समय अवधि खुद चुने",
            "Custom": "स्वनिर्मित",
            "Custom Message": "स्वनिर्मित सन्देश",
            "TOTAL SALES": "कुल बिक्री ",
            "Total Sales": "कुल बिक्री ",
            "NAME": "नाम ",
            "SERVICES": "सर्विसेज ",
            "AMOUNT": "रकम",
            "Amount": "रकम",
            "Event Details": "इवेंट की जानकारी",
            "Add expenses": "खर्च जोड़ें ",
            "Add Expenses": "खर्च जोड़ें ",
            "Percentage": "प्रतिशत",
            "Total Expenses": "कुल खर्च",
            "EXPENSES": "खर्च",
            "Day wise appointment": "दैनिक अपॉइंटमेंट",
            "Confirmed Bookings": "कनफर्म्ड अपॉइंटमेंट्स",
            "Pending Appointment": "पेंडिंग अपॉइंटमेंट्स",
            "Edit": "बदलाव करे",
            "Message": "सन्देश भेजे ",
            "cancel": "रद्द करे",
            "CANCEL": "रद्द करे",
            "billings": "बिलिंग करे",
            "Resend OTP": "ओटीपी पुनः भेजें",
            "Verify OTP": "ओटीपी को सत्यापित करें",
            "OTP": "ओटीपी",
            "From Date": "तारीख से",
            "To Date": "तारीख तक",
            "View Detail": "विस्तार से देखें",
            "Day Wise Appointments": "दैनिक अपॉइंटमेंट्स",
            "Appointments": "अपॉइंटमेंट्स",
            "Appointment": "अपॉइंटमेंट",
            'Selected Date': "चयनित दिनांक",
            "Select": "चयनित करें",
            "JOB LOCATION": "नौकरी करने का स्थान",
            "Facilities": "सुविधाएं",
            "Min. Limit 15 Days": "15 दिन की सीमा",
            "OPEN Till": "अंतिम दिनांक",
            "REQUIRED EXPERIENCE": "आवश्यक अनुभव",
            "SALARY": "वेतन",
            "Salary": "वेतन",
            "JOB SUMMARY": "कार्य सारांश",
            "SELECT STYLIST": "स्टाइलिस्ट का चयन करें",
            "Change Language": "भाषा बदलो",
            "Verify": "ओटीपी को सत्यापित करें",
            "Stylist": "स्टाइलिस्ट",
            "Busniess": "बिज़नेस",
            "Freelancer": "फ्रीलांसर",
            "Confirm Password": "कन्फर्म पासवर्ड",
            "Password not Match": "पासवर्ड सेम नहीं है",
            "Hindi": "हिन्दी",
            "Continue this address": "लोकेशन सेव करें",
            "We have Sent the OTP on": "हमने ओटीपी इस नंबर पर भेजा है",
            "EDIT MOBILE NUMBER": "मोबाइल नंबर बदले",
            "If you did not Received a code": "अगर आपके फ़ोन पर कोड नहीं मिला है",
            "Ex. Male Hair Artist,Female Hair Artist etc.": "जैसे मेल आर्टिस्ट आदि",
            "Mumbai, Delhi etc.": "मुंबई, दिल्ली आदि",
            "Experience Mini.": "न्यूनतम अनुभव",
            "Mini. Qualification": "न्यूनतम योग्यता",
            "Last Date": "अंतिम तिथी",
            "Total Applied": "कुल लागू",
            "Contact Info": "संपर्क जानकारी",
            "Search For Employee": "कर्मचारी खोजें",
            "Search For Job": "नौकरियां खोजें"
        };
    }
    LanguagePipe.prototype.transform = function (value) {
        if (localStorage.getItem("language") == 'Hindi') {
            return this.hi[value];
        }
        else {
            return value;
        }
    };
    LanguagePipe = __decorate([
        core_1.Pipe({
            name: 'language',
            pure: false
        })
    ], LanguagePipe);
    return LanguagePipe;
}());
exports.LanguagePipe = LanguagePipe;
