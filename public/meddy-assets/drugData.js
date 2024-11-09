import Paracetamon from '/meddy-assets/drug/paracetamon.jpg'; // Absolute path
import Ibuprofen from '/meddy-assets/drug/Ibuprofen.jpg'; // Absolute path
import Ketoconazole from '/meddy-assets/drug/Ketoconazole.png'; // Absolute path
import Amlodipine from '/meddy-assets/drug/Amlodipine.png'; // Absolute path
import Metformin from '/meddy-assets/drug/Amlodipine.png'; // Absolute path
import Omeprazole from '/meddy-assets/drug/Amlodipine.png'; // Absolute path
import Cetirizine from '/meddy-assets/drug/Amlodipine.png'; // Absolute path



export const Medicines = [
  {
    Med_ID: "MED001",
    Name: "Viên nén  Paracetamol 500mg",
    Med_Categories: "Thuốc hô hấp",
    Med_type: "Viên nén bao phim",
    TRN: "VN-12345-ABC",
    Unit: "Viên",
    Price: 1000, // Giá dạng number
    Ingredients: "Paracetamol 500mg",
    Benefit: "Giảm đau, hạ sốt",
    Indications: "Người lớn: Uống 1 viên mỗi 4-6 giờ khi có triệu chứng đau nhẹ đến trung bình hoặc sốt...",
    Contraindications: "Không dùng cho người suy gan nặng hoặc người dị ứng với thành phần Paracetamol...",
    Usage: "Dùng đường uống với nước, uống nguyên viên...",
    Med_Dosage: "Đối với người lớn: uống 1 viên mỗi 4-6 giờ...",
    Side_effects: "Một số tác dụng phụ có thể gặp phải bao gồm buồn nôn, đau bụng, hoặc phát ban nhẹ...",
    ExpDate: new Date("2026-05-01"), // Dạng date
    MfgDate: new Date("2024-05-01"), // Dạng date
    Prescription_drug: false,
    img: Paracetamon
  },
  {
    Med_ID: "MED002",
    Name: "Ibuprofen",
    Med_Categories: "Thuốc hệ thần kinh",
    Med_type: "Viên nang cứng",
    TRN: "US-67890-XYZ",
    Unit: "Viên",
    Price: 2000, // Giá dạng number
    Ingredients: "Ibuprofen 200mg",
    Benefit: "Giảm đau, chống viêm",
    Indications: "Người lớn: Uống 1-2 viên mỗi 6-8 giờ để giảm đau từ nhẹ đến trung bình...",
    Contraindications: "Không dùng cho người bị suy gan nặng, người có tiền sử viêm loét dạ dày...",
    Usage: "Dùng đường uống với nước, uống nguyên viên...",
    Med_Dosage: "1-2 viên mỗi 6-8 giờ tùy theo tình trạng đau...",
    Side_effects: "Các tác dụng phụ thường gặp bao gồm đau dạ dày, buồn nôn...",
    ExpDate: new Date("2027-02-10"),
    MfgDate: new Date("2025-02-10"),
    Prescription_drug: false,
    img:Ibuprofen
  },
  {
    Med_ID: "MED003",
    Name: "Ketoconazole Cream",
    Med_Categories: "Thuốc dị ứng",
    Med_type: "Tuýp",
    TRN: "IN-24680-UVW",
    Unit: "Tuýp",
    Price: 45000, // Giá dạng number
    Ingredients: "Ketoconazole 2%",
    Benefit: "Điều trị nhiễm nấm ngoài da",
    Indications: "Bôi một lớp mỏng lên vùng da bị nhiễm nấm 1-2 lần mỗi ngày...",
    Contraindications: "Không dùng cho người dị ứng với Ketoconazole...",
    Usage: "Dùng bôi ngoài da, tránh tiếp xúc với mắt hoặc miệng...",
    Med_Dosage: "Bôi một lớp mỏng 1-2 lần mỗi ngày theo chỉ định...",
    Side_effects: "Có thể gây kích ứng da, ngứa hoặc mẩn đỏ...",
    ExpDate: new Date("2026-11-15"),
    MfgDate: new Date("2024-11-15"),
    Prescription_drug: true,
    img:Ketoconazole
  },
  {
    Med_ID: "MED004",
    Name: "Amlodipine",
    Med_Categories: "Thuốc tim mạch",
    Med_type: "Viên nén",
    TRN: "VN-56789-LMN",
    Unit: "Viên",
    Price: 5000, // Giá dạng number
    Ingredients: "Amlodipine 5mg",
    Benefit: "Điều trị cao huyết áp và đau thắt ngực",
    Indications: "Người lớn: Uống 1 viên mỗi ngày để kiểm soát huyết áp...",
    Contraindications: "Không dùng cho người bị dị ứng với Amlodipine hoặc có tiền sử suy tim nặng...",
    Usage: "Dùng đường uống, uống nguyên viên với nước...",
    Med_Dosage: "1 viên mỗi ngày, liều lượng có thể điều chỉnh theo chỉ dẫn...",
    Side_effects: "Có thể gây phù chân, chóng mặt, hoặc mệt mỏi...",
    ExpDate: new Date("2026-08-01"),
    MfgDate: new Date("2024-08-01"),
    Prescription_drug: true,
    img: Amlodipine
  },
  {
    Med_ID: "MED005",
    Name: "Cetirizine",
    Med_Categories: "Thuốc dị ứng",
    Med_type: "Viên nén",
    TRN: "US-13579-OPQ",
    Unit: "Viên",
    Price: 1500, // Giá dạng number
    Ingredients: "Cetirizine 10mg",
    Benefit: "Điều trị các triệu chứng dị ứng như hắt hơi, sổ mũi...",
    Indications: "Người lớn: Uống 1 viên mỗi ngày khi có triệu chứng dị ứng...",
    Contraindications: "Không dùng cho người bị dị ứng với Cetirizine...",
    Usage: "Dùng đường uống, có thể dùng trước hoặc sau khi ăn...",
    Med_Dosage: "1 viên mỗi ngày, không nên dùng quá liều quy định...",
    Side_effects: "Có thể gây buồn ngủ hoặc khô miệng...",
    ExpDate: new Date("2026-12-01"),
    MfgDate: new Date("2024-12-01"),
    Prescription_drug: false,
    img: Cetirizine
  },
  {
    Med_ID: "MED006",
    Name: "Omeprazole",
    Med_Categories: "Thuốc tiêu hóa - gan mật",
    Med_type: "Viên nang cứng",
    TRN: "EU-98765-QRS",
    Unit: "Viên",
    Price: 3000, // Giá dạng number
    Ingredients: "Omeprazole 20mg",
    Benefit: "Điều trị trào ngược dạ dày, viêm loét dạ dày",
    Indications: "Người lớn: Uống 1 viên mỗi ngày vào buổi sáng trước khi ăn...",
    Contraindications: "Không dùng cho người dị ứng với Omeprazole...",
    Usage: "Dùng đường uống với nước, uống nguyên viên...",
    Med_Dosage: "1 viên mỗi ngày vào buổi sáng, có thể tăng liều theo chỉ định...",
    Side_effects: "Tác dụng phụ thường gặp bao gồm đau đầu, buồn nôn...",
    ExpDate: new Date("2027-01-10"),
    MfgDate: new Date("2025-01-10"),
    Prescription_drug: true,
    img: Omeprazole
  },
  {
    Med_ID: "MED007",
    Name: "Metformin",
    Med_Categories: "Thuốc tiểu đường",
    Med_type: "Viên nén",
    TRN: "IN-54321-TUV",
    Unit: "Viên",
    Price: 2500, // Giá dạng number
    Ingredients: "Metformin 500mg",
    Benefit: "Kiểm soát đường huyết ở bệnh nhân tiểu đường type 2",
    Indications: "Người lớn: Uống 1-2 viên mỗi ngày tùy theo chỉ định của bác sĩ...",
    Contraindications: "Không dùng cho người bị suy thận nặng, bệnh gan, hoặc nghiện rượu...",
    Usage: "Dùng đường uống, tốt nhất là uống sau bữa ăn...",
    Med_Dosage: "1-2 viên mỗi ngày, liều lượng tùy theo chỉ định của bác sĩ...",
    Side_effects: "Có thể gây đau bụng, tiêu chảy, hoặc buồn nôn...",
    ExpDate: new Date("2026-09-15"),
    MfgDate: new Date("2024-09-15"),
    Prescription_drug: true,
    img: Metformin
  }
];
