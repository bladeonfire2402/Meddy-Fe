
import new1 from '/meddy-assets/news/new1.jpg'
import new2 from '/meddy-assets/news/new2.jpg'

import new4 from '/meddy-assets/news/new3.jpg'
import new5 from '/meddy-assets/news/new5.jpg'

export const newsList = [
    {
      id: 1,
      title: "Cập nhật về tình hình dịch bệnh Covid-19",
      content: "Các cơ quan y tế trên thế giới đang theo dõi sát sao các biến thể mới của virus SARS-CoV-2. Hiện tại, các biến thể này có khả năng lây lan nhanh hơn, nhưng mức độ nguy hiểm chưa tăng đáng kể. Các chuyên gia khuyến nghị tiêm nhắc lại vaccine cho các nhóm có nguy cơ cao để duy trì khả năng bảo vệ. Một số quốc gia đã tái áp dụng các biện pháp kiểm dịch nhằm ngăn chặn sự lây lan, đặc biệt trong các khu vực đông dân cư.",
      datePublished: "2024-11-04",
      imageUrl: new1
    },
    {
      id: 2,
      title: "Các tiến bộ mới trong nghiên cứu ung thư",
      content: "Những phát hiện mới trong liệu pháp miễn dịch cho thấy tiềm năng tiêu diệt tế bào ung thư mà không gây tổn hại đến mô lành. Liệu pháp tế bào T CAR, một trong các phương pháp điều trị tiên tiến, đã cho thấy hiệu quả trong điều trị một số loại ung thư máu. Ngoài ra, các nhà khoa học đang nghiên cứu cách tăng cường phản ứng miễn dịch tự nhiên của cơ thể để ngăn chặn sự phát triển của khối u, mở ra hy vọng mới cho bệnh nhân ung thư.",
      datePublished: "2024-11-03",
      imageUrl: new1
    },
    {
      id: 3,
      title: "Tiêm chủng phòng chống cúm mùa",
      content: "Bộ Y tế khuyến nghị người dân tiêm phòng cúm mùa để giảm nguy cơ mắc bệnh và hạn chế tình trạng quá tải hệ thống y tế trong mùa cúm. Đặc biệt, các nhóm như người già, trẻ em và người có bệnh lý nền cần chú trọng tiêm chủng để bảo vệ sức khỏe. Các loại vaccine hiện nay được cải tiến để bảo vệ khỏi nhiều chủng virus cúm đang lưu hành, đảm bảo hiệu quả phòng bệnh.",
      datePublished: "2024-11-02",
      imageUrl: new2
    },
    {
      id: 4,
      title: "Những thành tựu mới trong y học tái tạo",
      content: "Y học tái tạo đạt được những bước tiến đáng kể nhờ công nghệ tế bào gốc và in 3D mô tạng. Các nhà khoa học đã thành công trong việc tái tạo mô gan và tim trong phòng thí nghiệm, tạo ra hy vọng cho các phương pháp điều trị mới trong tương lai. Các ứng dụng y học tái tạo này có thể sẽ thay đổi cách điều trị các bệnh mãn tính và giảm nhu cầu cấy ghép nội tạng.",
      datePublished: "2024-11-01",
      imageUrl: new4
    },
    {
        id: 5,
        title: "Những thành tựu mới trong y học tái tạo",
        content: "Y học tái tạo đạt được những bước tiến đáng kể nhờ công nghệ tế bào gốc và in 3D mô tạng. Các nhà khoa học đã thành công trong việc tái tạo mô gan và tim trong phòng thí nghiệm, tạo ra hy vọng cho các phương pháp điều trị mới trong tương lai. Các ứng dụng y học tái tạo này có thể sẽ thay đổi cách điều trị các bệnh mãn tính và giảm nhu cầu cấy ghép nội tạng.",
        datePublished: "2024-11-01",
        imageUrl: new5
      }
  ];
  
  export const NewListData = [
    {
      id: 1,
      title: "Làm thế nào để duy trì sức khỏe tim mạch?",
      category: "Sức khỏe",
      publishDate: "2024-11-12",
      summary: "Các thói quen lành mạnh giúp bảo vệ trái tim bạn khỏi nguy cơ bệnh tật.",
      content: `
        Tim mạch đóng vai trò quan trọng trong việc duy trì sức khỏe tổng thể. Để bảo vệ trái tim, bạn cần tập trung vào các yếu tố như chế độ ăn uống, tập luyện thể chất và kiểm tra sức khỏe định kỳ. 
        Một chế độ ăn uống cân bằng, giàu rau củ quả, các loại hạt, cá và ít thực phẩm chứa nhiều chất béo bão hòa sẽ giúp giảm nguy cơ xơ vữa động mạch. 
      `,
      imageUrl: new1
    },
    {
      id: 2,
      title: "Các dấu hiệu sớm của bệnh tiểu đường cần chú ý",
      category: "Bệnh",
      publishDate: "2024-11-15",
      summary: "Nhận biết các dấu hiệu sớm của tiểu đường có thể giúp bạn phòng ngừa bệnh hiệu quả hơn.",
      content: `
        Bệnh tiểu đường ngày càng phổ biến trong xã hội hiện đại. Một số dấu hiệu sớm bao gồm cảm giác khát nước liên tục, đi tiểu nhiều, mệt mỏi không rõ nguyên nhân và giảm cân không lý do. 
        Nếu bạn gặp bất kỳ triệu chứng nào trong số này, hãy tham khảo ý kiến bác sĩ để được kiểm tra đường huyết.
      `,
      imageUrl: new2
    },
    {
      id: 3,
      title: "Vaccine mRNA và bước tiến mới trong y học",
      category: "Thành tựu y tế",
      publishDate: "2024-11-13",
      summary: "Vaccine mRNA đã mở ra một kỷ nguyên mới trong việc phòng chống các bệnh nguy hiểm.",
      content: `
        Công nghệ mRNA là một bước tiến lớn trong y học hiện đại, giúp phát triển vaccine một cách nhanh chóng và hiệu quả. 
        Vaccine mRNA không chỉ giúp phòng chống Covid-19 mà còn có tiềm năng lớn trong điều trị ung thư và nhiều bệnh lý khác.
      `,
      imageUrl: new4
    },
    {
      id: 4,
      title: "Top 5 loại thuốc giảm đau phổ biến nhất hiện nay",
      category: "Thuốc",
      publishDate: "2024-11-09",
      summary: "Danh sách các loại thuốc giảm đau được bác sĩ khuyên dùng và cách sử dụng an toàn.",
      content: `
        Thuốc giảm đau được sử dụng phổ biến trong điều trị đau đầu, đau cơ, và các triệu chứng đau nhẹ. Một số loại thuốc phổ biến bao gồm paracetamol, ibuprofen, aspirin, diclofenac và tramadol. 
        Tuy nhiên, việc lạm dụng thuốc giảm đau có thể gây tác dụng phụ nghiêm trọng. Hãy luôn tuân thủ hướng dẫn của bác sĩ.
      `,
      imageUrl: new5
    },
    {
      id: 5,
      title: "10 thực phẩm tăng cường hệ miễn dịch trong mùa lạnh",
      category: "Sức khỏe",
      publishDate: "2024-11-10",
      summary: "Bổ sung các thực phẩm giàu vitamin để giữ sức khỏe trong mùa đông.",
      content: `
        Mùa lạnh là thời điểm cơ thể dễ mắc các bệnh do virus và vi khuẩn gây ra, đặc biệt là cảm cúm và viêm họng. Việc bổ sung các thực phẩm tăng cường hệ miễn dịch sẽ giúp bạn bảo vệ cơ thể hiệu quả hơn.
      `,
      imageUrl: new5
    },
    {
      id: 6,
      title: "Những lợi ích của việc ngủ đủ giấc mỗi ngày",
      category: "Sức khỏe",
      publishDate: "2024-11-16",
      summary: "Giấc ngủ không chỉ giúp phục hồi cơ thể mà còn cải thiện trí nhớ và tâm trạng.",
      content: `
        Ngủ đủ giấc từ 7-8 giờ mỗi ngày đóng vai trò quan trọng trong việc duy trì sức khỏe tổng thể. 
        Thiếu ngủ có thể dẫn đến nhiều vấn đề sức khỏe như tăng cân, mất tập trung, và nguy cơ bệnh tim mạch. 
        Hãy cố gắng xây dựng thói quen ngủ đúng giờ và tạo môi trường ngủ yên tĩnh để cơ thể được nghỉ ngơi tốt nhất.
      `,
      imageUrl: new1
    },
    {
      id: 7,
      title: "Tập yoga và lợi ích bất ngờ với sức khỏe tâm trí",
      category: "Sức khỏe",
      publishDate: "2024-11-17",
      summary: "Yoga không chỉ là một bài tập mà còn là phương pháp cải thiện sức khỏe tinh thần.",
      content: `
        Yoga đã được chứng minh có tác dụng giảm căng thẳng, cải thiện linh hoạt cơ thể và giảm nguy cơ trầm cảm. 
        Dành 20-30 phút mỗi ngày cho yoga sẽ giúp bạn thư giãn và tăng cường sự tập trung trong công việc.
      `,
      imageUrl: new2
    },
    {
      id: 8,
      title: "Tầm quan trọng của việc uống đủ nước mỗi ngày",
      category: "Sức khỏe",
      publishDate: "2024-11-18",
      summary: "Nước không chỉ giúp cơ thể khỏe mạnh mà còn hỗ trợ thải độc hiệu quả.",
      content: `
        Việc uống đủ 2-3 lít nước mỗi ngày sẽ giúp duy trì sự cân bằng nước trong cơ thể, tăng cường chức năng tiêu hóa và làm đẹp da. 
        Nếu bạn thường xuyên quên uống nước, hãy thử mang theo bình nước cá nhân hoặc đặt nhắc nhở trên điện thoại.
      `,
      imageUrl: new4
    },
    {
      id: 9,
      title: "Lợi ích của việc đi bộ 10.000 bước mỗi ngày",
      category: "Sức khỏe",
      publishDate: "2024-11-19",
      summary: "Đi bộ là một bài tập dễ thực hiện, giúp cải thiện sức khỏe tim mạch và tinh thần.",
      content: `
        Đi bộ thường xuyên giúp tăng cường lưu thông máu, giảm nguy cơ bệnh tim mạch và cải thiện tâm trạng. 
        Hãy tận dụng thời gian rảnh để đi bộ quanh công viên hoặc sử dụng cầu thang bộ thay vì thang máy.
      `,
      imageUrl: new5
    },
    {
      id: 10,
      title: "Phòng ngừa và điều trị cảm cúm hiệu quả",
      category: "Bệnh",
      publishDate: "2024-11-20",
      summary: "Cảm cúm có thể gây ra nhiều phiền toái nếu không được điều trị kịp thời.",
      content: `
        Cảm cúm thường xuất hiện vào mùa đông, khi hệ miễn dịch suy giảm. Hãy bảo vệ bản thân bằng cách tiêm vaccine phòng cúm, rửa tay thường xuyên, và giữ ấm cơ thể khi ra ngoài.
      `,
      imageUrl: new1
    },
    {
      id: 11,
      title: "Dấu hiệu của bệnh trầm cảm và cách hỗ trợ người thân",
      category: "Bệnh",
      publishDate: "2024-11-21",
      summary: "Nhận biết trầm cảm sớm sẽ giúp cải thiện chất lượng cuộc sống cho người bệnh.",
      content: `
        Trầm cảm thường đi kèm với cảm giác buồn bã kéo dài, mất hứng thú với cuộc sống, và khó ngủ. 
        Nếu bạn hoặc người thân có các dấu hiệu này, hãy khuyến khích họ đến gặp bác sĩ tâm lý để được hỗ trợ kịp thời.
      `,
      imageUrl: new4
    },
    {
      id: 12,
      title: "Chế độ ăn uống giúp giảm nguy cơ bệnh cao huyết áp",
      category: "Bệnh",
      publishDate: "2024-11-22",
      summary: "Thay đổi lối sống là cách hiệu quả nhất để kiểm soát huyết áp cao.",
      content: `
        Một chế độ ăn giàu kali, ít muối và chất béo bão hòa sẽ giúp giảm nguy cơ cao huyết áp. 
        Ngoài ra, việc duy trì cân nặng và tập thể dục thường xuyên cũng rất quan trọng trong việc kiểm soát bệnh.
      `,
      imageUrl: new5
    },
    {
      id: 13,
      title: "Sự phát triển của robot y tế trong phẫu thuật",
      category: "Thành tựu y tế",
      publishDate: "2024-11-23",
      summary: "Robot y tế đang thay đổi cách tiếp cận phẫu thuật với độ chính xác và an toàn cao hơn.",
      content: `
        Công nghệ robot y tế như Da Vinci đã giúp các bác sĩ thực hiện phẫu thuật với độ chính xác cao, giảm nguy cơ biến chứng và rút ngắn thời gian hồi phục. 
        Đây là một bước tiến lớn trong việc ứng dụng công nghệ vào y học hiện đại.
      `,
      imageUrl: new1
    },
    {
      id: 14,
      title: "Cấy ghép tạng nhân tạo: Hy vọng cho bệnh nhân suy tạng",
      category: "Thành tựu y tế",
      publishDate: "2024-11-24",
      summary: "Công nghệ cấy ghép tạng nhân tạo mở ra cơ hội sống mới cho hàng triệu bệnh nhân.",
      content: `
        Các nghiên cứu mới đây đã phát triển thành công tạng nhân tạo từ tế bào gốc. 
        Những trái tim, phổi hoặc thận nhân tạo không chỉ giảm áp lực về nguồn hiến tạng mà còn tăng khả năng thích nghi của cơ thể với các bộ phận cấy ghép.
      `,
      imageUrl: new2
    },
    {
      id: 15,
      title: "Ứng dụng trí tuệ nhân tạo trong chẩn đoán bệnh",
      category: "Thành tựu y tế",
      publishDate: "2024-11-25",
      summary: "Trí tuệ nhân tạo đang giúp bác sĩ phát hiện sớm và chính xác nhiều bệnh lý.",
      content: `
        AI đã được sử dụng để phân tích hình ảnh y tế như X-quang, MRI, giúp phát hiện sớm các bệnh lý nguy hiểm như ung thư, bệnh tim mạch. 
        Khả năng học hỏi từ dữ liệu lớn giúp AI cải thiện độ chính xác và tốc độ trong chẩn đoán.
      `,
      imageUrl: new4
    }
    
  ];
  