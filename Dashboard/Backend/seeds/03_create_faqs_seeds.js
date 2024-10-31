// seeds/2024_08_17_faq.js
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Faq")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Faq").insert([
        {
          question: "ما هي ساعات العمل لديكم؟",
          answer:
            "ساعات العمل لدينا من الساعة 9 صباحاً حتى 5 مساءً من الأحد إلى الخميس.",
        },
        {
          question: "كيف يمكنني التواصل مع خدمة العملاء؟",
          answer:
            "يمكنك التواصل مع خدمة العملاء عبر الهاتف أو البريد الإلكتروني أو الدردشة المباشرة.",
        },
        {
          question: "هل تقدمون خدمات الشحن الدولي؟",
          answer: "نعم، نقدم خدمات الشحن الدولي إلى معظم الدول حول العالم.",
        },
        {
          question: "كيف يمكنني استعادة كلمة المرور الخاصة بي؟",
          answer:
            "يمكنك استعادة كلمة المرور من خلال النقر على 'نسيت كلمة المرور' وإدخال بريدك الإلكتروني لتلقي التعليمات.",
        },
        {
          question: "هل تقدمون ضمان على المنتجات؟",
          answer: "نعم، نقدم ضمان على معظم المنتجات لمدة سنة من تاريخ الشراء.",
        },
        {
          question: "ما هي سياسة الإرجاع لديكم؟",
          answer:
            "يمكنك إرجاع المنتجات خلال 30 يومًا من تاريخ الشراء بشرط أن تكون غير مستخدمة وفي حالتها الأصلية.",
        },
        {
          question: "كيف يمكنني تتبع طلبي؟",
          answer:
            "يمكنك تتبع طلبك من خلال صفحة 'تتبع الطلب' على موقعنا وإدخال رقم التتبع الخاص بك.",
        },
        {
          question: "هل تقدمون خصومات للمجموعات أو الشركات؟",
          answer:
            "نعم، نقدم خصومات خاصة للمجموعات والشركات. يرجى التواصل معنا للحصول على مزيد من التفاصيل.",
        },
        {
          question: "ما هي طرق الدفع المتاحة؟",
          answer:
            "نوفر عدة طرق للدفع مثل البطاقات الائتمانية، التحويل البنكي، والدفع عند الاستلام.",
        },
        {
          question: "هل يمكنني تغيير عنوان الشحن بعد إتمام الطلب؟",
          answer:
            "نعم، يمكنك تغيير عنوان الشحن قبل شحن الطلب. يرجى التواصل مع خدمة العملاء للمساعدة.",
        },
      ]);
    });
};
