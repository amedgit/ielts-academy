/* ============================================================
   دورهٔ «از صفر تا قهرمان» · A0 → C1 · نسخهٔ فارسی
   ============================================================ */

const COURSE_FA = {
  intro: `شش سطح و چهار درس در هر سطح. هر درس شامل نظریهٔ کوتاه، واژگان با صدا، نمونه‌های صوتی و یک آزمون پنج‌سؤالی است. تا وقتی ۴ پاسخ از ۵ را درست نزنید، به درس بعد نروید.`,

  levels: {
    a0: { name: 'بقا', goal: 'معرفی خود، هجی‌کردن نام، گفتن عدد و گذراندن موقعیت‌های ابتدایی.', desc: 'از صفر مطلق شروع می‌کنید. اینجا خواندن با صدای بلند، معرفی خود و درخواست‌های ضروری را یاد می‌گیرید.' },
    a1: { name: 'پایه', goal: 'دربارهٔ برنامهٔ روزانه، خانه و محیط اطراف با جمله‌های کامل حرف بزنید.', desc: 'الان می‌توانید خودتان را معرفی کنید. حالا یاد می‌گیرید روزمره‌تان را بدون ترجمهٔ ذهنی توصیف کنید.' },
    a2: { name: 'زندگی روزمره', goal: 'گفتن اینکه چه شد، برنامه‌ریزی برای آینده و مقایسهٔ چیزها.', desc: 'حال را توصیف می‌کنید. حالا گذشته، آینده و مقایسه را یاد می‌گیرید.' },
    b1: { name: 'استقلال', goal: 'حرف زدن از تجربه‌ها، نصیحت دادن و بیان شرط.', desc: 'اینجا کم‌کم در انگلیسی «بزرگسال» به نظر می‌رسید: حال کامل، افعال وجهی و شرطی‌ها.' },
    b2: { name: 'روانی', goal: 'استدلال کردن، مجهول، جمله‌های موصولی و نقل قول.', desc: 'پرش به B2 یعنی گرامر پیچیده با طبیعی‌بودن. اینجا پایهٔ آیلتس ۶.۵ تا ۷ است.' },
    c1: { name: 'تسلط', goal: 'تلطیف، تأکید و نوشتن با سبک دانشگاهی.', desc: 'سطحی که برای نمرهٔ ۷ لازم است: دقت، ظرافت و کنترل سبک. اینجا همه‌چیز صیقل می‌خورد.' }
  },

  units: {
    a0u1: {
      title: 'الفبا و صداها', goal: 'هجی‌کردن نامتان و شناخت حروفی که بیشتر سردرگم می‌کنند.',
      points: [
        { h: '۲۶ حرف، ۵ مصوت', html: `<p>انگلیسی ۲۶ حرف دارد. مصوت‌ها <b>a, e, i, o, u</b> هستند و بقیه صامت‌اند. حرف <b>y</b> گاهی نقش مصوت دارد (<em>city</em>).</p><p class="ex">A B C D E F G / H I J K L M N O P / Q R S T U V W X Y Z</p>` },
        { h: 'حروفی که سخت‌اند', html: `<p><b>b / v</b>: در انگلیسی دو صدای متفاوت‌اند، اما برای فارسی‌زبان‌ها شبیه هم به نظر می‌رسند (<em>bee</em> = زنبور، <em>vee</em> = حرف v).</p><p><b>g / j</b>: <em>g</em> در <em>giant</em> صدای /dʒ/ دارد، اما در <em>go</em> صدای /g/.</p><p><b>h</b> در <em>hour, honest, heir</em> خوانده نمی‌شود.</p><p><b>w</b> را <em>double-u</em> و <b>y</b> را <em>why</em> می‌گویند.</p>` },
        { h: 'هجی‌کردن در موقعیت واقعی', html: `<p class="ex">— How do you spell your surname?<br>— M-A-R-S-H.</p><p>در ایمیل یا تلفن: <b>@</b> = <em>at</em>، <b>.</b> = <em>dot</em>، <b>-</b> = <em>dash</em>.</p><p class="ex">ana at email dot com</p>` }
      ],
      vocab: { name: 'نام', spell: 'هجی کردن', letter: 'حرف', word: 'کلمه', surname: 'نام خانوادگی', email: 'ایمیل' }
    },

    a0u2: {
      title: 'احوال‌پرسی و معرفی', goal: 'با فعل to be بگویید چه کسی هستید و اهل کجا هستید.',
      points: [
        { h: 'فعل to be', html: `<p>مهم‌ترین فعل انگلیسی است: یعنی «بودن» و با شخص تغییر می‌کند.</p><table class="mini"><tr><th>شخص</th><th>شکل</th><th>کوتاه</th></tr><tr><td>I</td><td>am</td><td>I'm</td></tr><tr><td>you</td><td>are</td><td>you're</td></tr><tr><td>he / she / it</td><td>is</td><td>he's / she's / it's</td></tr><tr><td>we / they</td><td>are</td><td>we're / they're</td></tr></table><p class="ex">I'm Ana. You're from Spain. She's a teacher.</p>` },
        { h: 'معرفی در ۴ جمله', html: `<p class="ex">Hello, I'm Ana. I'm from Madrid. I'm twenty-eight. I'm a designer.</p><p>برای پرسیدن: <em>What's your name? Where are you from?</em></p>` },
        { h: 'منفی و سؤال', html: `<p>منفی: <b>I'm not</b> from here. / <b>She isn't</b> a doctor.</p><p>سؤال: <b>Are you</b> Spanish? — Yes, I am. / No, I'm not.</p><p class="warn">✗ I am student. → ✓ I am <b>a</b> student. (شغل‌ها حرف تعریف می‌خواهند.)</p>` }
      ],
      vocab: { hello: 'سلام', 'good morning': 'صبح بخیر', 'nice to meet you': 'از آشنایی خوشحالم', from: 'از (اهل)', country: 'کشور', city: 'شهر' }
    },

    a0u3: {
      title: 'اعداد، ساعت و تاریخ', goal: 'گفتن قیمت، ساعت و تاریخ تولد.',
      points: [
        { h: 'اعداد ۱ تا ۱۰۰', html: `<p>1 one · 2 two · 3 three · 4 four · 5 five · 6 six · 7 seven · 8 eight · 9 nine · 10 ten</p><p>11 eleven · 12 twelve · 13 thirteen · 20 twenty · 21 twenty-one · 30 thirty · 40 forty · 50 fifty · 100 a hundred</p><p class="warn">✗ fourty → ✓ <b>forty</b> (بدون u).</p>` },
        { h: 'ساعت', html: `<p class="ex">It's seven o'clock. · It's half past six. · It's a quarter to nine.</p><p><b>at</b> + ساعت: <em>at 7 o'clock, at half past six</em>.</p><p>برای وضوح بیشتر: <em>seven fifteen, seven thirty</em>.</p>` },
        { h: 'تاریخ و قیمت', html: `<p><b>on</b> + روز: <em>on 3 March</em> (می‌گویند <em>the third of March</em>).</p><p><b>in</b> + سال/ماه: <em>in 2026, in May</em>.</p><p class="ex">It costs £38. / It's $12.50. / My birthday is on the third of March.</p>` }
      ],
      vocab: { number: 'عدد', hour: 'ساعت', 'half past': 'و نیم', quarter: 'ربع', birthday: 'تولد', price: 'قیمت' }
    },

    a0u4: {
      title: 'عبارت‌های ضروری', goal: 'درخواست کردن، پرسیدن قیمت و گفتن اینکه نمی‌فهمید.',
      points: [
        { h: 'درخواست مؤدبانه', html: `<p class="ex">Can I have a coffee, please?<br>I'd like a coffee, please.</p><p><b>Can I have...?</b> مستقیم و مؤدبانه است. <b>I'd like...</b> رسمی‌تر است.</p><p class="warn">✗ I want a coffee (در کافه بی‌ادبانه است). → ✓ I'd like a coffee.</p>` },
        { h: 'سؤال‌های ضروری', html: `<p class="ex">How much is it? · Where is the toilet? · What does it mean? · Could you repeat that, please?</p><p>وقتی نمی‌فهمید: <b>Sorry, I don't understand.</b> / <b>Could you say that again?</b> / <b>More slowly, please.</b></p>` },
        { h: 'پنج واژهٔ جادویی', html: `<p><b>please</b> (لطفاً) · <b>thank you</b> (ممنون) · <b>sorry</b> (ببخشید) · <b>excuse me</b> (ببخشید) · <b>you're welcome</b> (خواهش می‌کنم)</p><p class="ex">Excuse me, where is the station? — Sorry, I don't know.</p>` }
      ],
      vocab: { please: 'لطفاً', 'thank you': 'ممنون', 'excuse me': 'ببخشید', 'how much is it': 'چقدر است', 'I do not understand': 'نمی‌فهمم', 'could you repeat that': 'می‌شود تکرار کنید' }
    },

    a1u5: {
      title: 'حروف تعریف و جمع', goal: 'استفادهٔ درست از a/an/the و ساختن جمع.',
      points: [
        { h: 'a / an / the', html: `<p><b>a</b> پیش از صامتِ صدادار: <em>a book, a university</em> (صدای /juː/).</p><p><b>an</b> پیش از مصوتِ صدادار: <em>an apple, an hour</em> (h خوانده نمی‌شود).</p><p><b>the</b> وقتی مشخص یا شناخته‌شده است: <em>the book on the table</em>.</p><p>در حالت کلی، بدون حرف تعریف: <em>Books are expensive.</em></p>` },
        { h: 'قواعد جمع', html: `<p>+ <b>-s</b>: book → books.</p><p>+ <b>-es</b> پس از s, sh, ch, x, o: box → boxes, watch → watches.</p><p>صامت + <b>y</b> → <b>-ies</b>: city → cities, study → studies.</p><p>بی‌قاعده: man → men, child → children, foot → feet, person → people, woman → women.</p>` },
        { h: 'this / these', html: `<p><b>this</b> + مفرد: <em>this book</em>. <b>these</b> + جمع: <em>these books</em>.</p><p>دورتر: <b>that</b> / <b>those</b>.</p><p class="warn">✗ a informations → ✓ <b>information</b> (غیرقابل‌شمارش) یا <em>some information</em>.</p>` }
      ],
      vocab: { book: 'کتاب', box: 'جعبه', city: 'شهر', child: 'کودک', person: 'شخص', man: 'مرد' }
    },

    a1u6: {
      title: 'حال ساده: I, you, we, they', goal: 'دربارهٔ برنامهٔ روزانه و علاقه‌ها حرف بزنید.',
      points: [
        { h: 'شکل پایه', html: `<p>با I, you, we, they فعل تغییر نمی‌کند: <em>I work, you live, we study, they play</em>.</p><p class="ex">I live in Madrid. We study English every day.</p><p>این زمان برای عادت‌ها، علاقه‌ها و واقعیت‌های کلی است.</p>` },
        { h: 'منفی و سؤال', html: `<p>منفی: <b>don't</b> + فعل: <em>I don't like coffee.</em></p><p>سؤال: <b>Do</b> + فاعل + فعل: <em>Do you speak English?</em></p><p>پاسخ کوتاه: <em>Yes, I do. / No, I don't.</em></p><p class="warn">✗ I no like → ✓ I <b>don't</b> like.</p>` },
        { h: 'قیدهای تکرار', html: `<p><b>always, usually, often, sometimes, rarely, never</b> پیش از فعل اصلی می‌آیند:</p><p class="ex">I usually work from home. They never eat meat.</p>` }
      ],
      vocab: { work: 'کار کردن', live: 'زندگی کردن', like: 'دوست داشتن', study: 'درس خواندن', play: 'بازی کردن', 'every day': 'هر روز' }
    },

    a1u7: {
      title: 'حال ساده: he, she, it', goal: 'افزودن -s و حرف زدن دربارهٔ دیگران.',
      points: [
        { h: '-s سوم‌شخص', html: `<p>با he, she, it فعل <b>-s</b> می‌گیرد: <em>he works, she lives, it starts</em>.</p><p>املای خاص: <em>watch → watches, study → studies, go → goes, have → has</em>.</p><p class="warn">✗ She work here. → ✓ She work<b>s</b> here.</p>` },
        { h: 'منفی و سؤال', html: `<p>منفی: <b>doesn't</b> + فعل پایه: <em>She doesn't work here.</em></p><p>سؤال: <b>Does</b> + فاعل + فعل پایه: <em>Does he live here?</em></p><p class="warn">✗ Does she works? → ✓ Does she <b>work</b>? (‏-s در does هست.)</p>` },
        { h: 'قید تکرار در سوم‌شخص', html: `<p class="ex">He always arrives late. She never drinks coffee.</p><p>‏-s فقط یک بار می‌آید؛ قید تغییر نمی‌کند.</p>` }
      ],
      vocab: { always: 'همیشه', usually: 'معمولاً', sometimes: 'گاهی', never: 'هرگز', start: 'شروع کردن', finish: 'تمام کردن' }
    },

    a1u8: {
      title: 'there is/are و حروف اضافهٔ مکان', goal: 'توصیف خانه و محله.',
      points: [
        { h: 'there is / there are', html: `<p><b>There is</b> + مفرد: <em>There is a park near my house.</em></p><p><b>There are</b> + جمع: <em>There are two bedrooms.</em></p><p>منفی: <em>There isn't a lift.</em> / <em>There aren't any shops.</em></p><p>سؤال: <em>Is there a bank near here?</em></p>` },
        { h: 'some / any', html: `<p><b>some</b> در جملهٔ مثبت: <em>There are some chairs.</em></p><p><b>any</b> در منفی و سؤال: <em>There isn't any milk. Is there any bread?</em></p>` },
        { h: 'حروف اضافهٔ مکان', html: `<p><b>in</b> (داخل), <b>on</b> (روی), <b>under</b> (زیر), <b>next to</b> (کنار), <b>between</b> (بین), <b>opposite</b> (روبه‌روی), <b>behind</b> (پشت).</p><p class="ex">The cat is under the table. The bank is next to the supermarket.</p>` }
      ],
      vocab: { kitchen: 'آشپزخانه', bedroom: 'اتاق خواب', sofa: 'مبل', fridge: 'یخچال', 'next to': 'کنار', between: 'بین' }
    },

    a2u9: {
      title: 'گذشتهٔ ساده: باقاعده و بی‌قاعده', goal: 'گفتن اینکه دیروز چه کردید.',
      points: [
        { h: 'افعال باقاعده: -ed', html: `<p>work → work<b>ed</b> · live → live<b>d</b> · study → stud<b>ied</b> · stop → stop<b>ped</b></p><p>تلفظ: /t/ (worked)، /d/ (played)، /ɪd/ (wanted, needed).</p><p class="ex">I worked late yesterday. She studied for two hours.</p>` },
        { h: 'بی‌قاعده‌های ضروری', html: `<p>go → <b>went</b> · see → <b>saw</b> · have → <b>had</b> · do → <b>did</b> · buy → <b>bought</b> · make → <b>made</b> · get → <b>got</b> · come → <b>came</b>.</p><p class="warn">✗ I goed → ✓ I <b>went</b>. قاعده‌ای ندارد؛ در جمله حفظ می‌شوند.</p>` },
        { h: 'منفی و سؤال', html: `<p><b>didn't</b> + فعل پایه: <em>I didn't go.</em></p><p><b>Did</b> + فاعل + فعل پایه: <em>Did you see him?</em></p><p class="warn">✗ I didn't went. → ✓ I didn't <b>go</b>.</p>` }
      ],
      vocab: { went: 'رفت', saw: 'دید', bought: 'خرید', had: 'داشت', yesterday: 'دیروز', ago: 'پیش' }
    },

    a2u10: {
      title: 'گذشتهٔ استمراری در برابر گذشتهٔ ساده', goal: 'توصیف کارهای در جریان و قطع‌شدن آن‌ها.',
      points: [
        { h: 'was / were + -ing', html: `<p><b>was</b> با I/he/she/it؛ <b>were</b> با you/we/they.</p><p class="ex">I was working at 8 p.m. They were watching a film.</p>` },
        { h: 'قطع‌شدن: when / while', html: `<p><b>While</b> + کار طولانی (استمراری)، <b>when</b> + کار کوتاه (ساده):</p><p class="ex">I was having a shower when the phone rang.<br>While she was cooking, the lights went out.</p>` },
        { h: 'پس‌زمینهٔ داستان', html: `<p>استمراری صحنه را می‌سازد؛ ساده می‌گوید چه اتفاقی افتاد.</p><p class="ex">It was raining and people were waiting at the bus stop. Suddenly, a car stopped.</p>` }
      ],
      vocab: { while: 'در حالی که', when: 'وقتی', suddenly: 'ناگهان', raining: 'بارانی', driving: 'در حال رانندگی', sleeping: 'در حال خواب' }
    },

    a2u11: {
      title: 'آینده: will، going to و حال', goal: 'انتخاب شکل درست برای برنامه و پیش‌بینی.',
      points: [
        { h: 'going to: برنامه و نشانه', html: `<p>برنامهٔ قطعی: <em>We're going to move to Valencia.</em></p><p>پیش‌بینی با شاهد: <em>Look at those clouds — it's going to rain.</em></p>` },
        { h: 'will: تصمیم و نظر', html: `<p>تصمیم در همان لحظه: <em>I'll help you.</em></p><p>پیش‌بینی یا نظر: <em>I think she'll pass.</em> / <em>It won't be easy.</em></p><p class="ex">The phone is ringing. — I'll answer it.</p>` },
        { h: 'حال برای برنامهٔ قطعی', html: `<p>برنامهٔ رسمی → حال ساده: <em>The train leaves at 7.</em></p><p>قرار قطعی → حال استمراری: <em>I'm meeting Ana tomorrow at six.</em></p>` }
      ],
      vocab: { tomorrow: 'فردا', 'next week': 'هفتهٔ آینده', plan: 'برنامه', probably: 'احتمالاً', arrangement: 'قرار', predict: 'پیش‌بینی کردن' }
    },

    a2u12: {
      title: 'صفت‌های تفضیلی و عالی', goal: 'مقایسهٔ شهرها، قیمت‌ها و افراد.',
      points: [
        { h: 'تفضیلی', html: `<p>صفت کوتاه: + <b>-er</b> → <em>cheaper, bigger, older</em>.</p><p>صفت بلند: <b>more</b> + صفت → <em>more expensive, more interesting</em>.</p><p>بی‌قاعده: good → <b>better</b>، bad → <b>worse</b>، far → <b>further</b>.</p><p class="ex">Madrid is bigger than Toledo. This book is more interesting than that one.</p>` },
        { h: 'عالی', html: `<p>کوتاه: <b>the</b> + -est → <em>the cheapest, the biggest</em>.</p><p>بلند: <b>the most</b> + صفت → <em>the most expensive</em>.</p><p class="ex">It's the best restaurant in the city.</p>` },
        { h: 'دقیق‌تر کردن مقایسه', html: `<p><b>as ... as</b> (برابر): <em>He's as tall as me.</em></p><p><b>not as ... as</b> (کمتر): <em>It's not as expensive as I thought.</em></p><p><b>much / a bit</b> + تفضیلی: <em>much cheaper, a bit bigger</em>.</p>` }
      ],
      vocab: { cheaper: 'ارزان‌تر', 'more expensive': 'گران‌تر', better: 'بهتر', worse: 'بدتر', 'as tall as': 'به بلندیِ', 'the most': 'بیشترین' }
    },

    b1u13: {
      title: 'حال کامل: تجربه‌ها', goal: 'گفتن کارهایی که کرده‌اید، بدون گفتن زمان.',
      points: [
        { h: 'have / has + اسم مفعول', html: `<p>I <b>have</b> visited London. She <b>has</b> eaten sushi.</p><p>کوتاه: <em>I've, she's, they've</em>.</p><p>برای تجربه‌های زندگی و دوره‌هایی که ادامه دارند.</p>` },
        { h: 'ever / never / just / already / yet', html: `<p><b>ever</b> در سؤال: <em>Have you ever been to Japan?</em></p><p><b>never</b>: <em>I've never eaten insects.</em></p><p><b>just</b> (همین حالا): <em>She's just arrived.</em></p><p><b>already</b> (قبلاً): <em>I've already finished.</em> · <b>yet</b> در منفی/سؤال: <em>Not yet.</em></p>` },
        { h: 'for / since و been / gone', html: `<p><b>for</b> + مدت: <em>for three years</em>. <b>since</b> + نقطهٔ شروع: <em>since 2019</em>.</p><p><b>been</b> = رفته و برگشته: <em>She's been to Paris</em> (الان اینجاست).</p><p><b>gone</b> = رفته و هنوز آنجاست: <em>She's gone to Paris</em>.</p>` }
      ],
      vocab: { ever: 'تا حالا', never: 'هرگز', already: 'قبلاً', yet: 'هنوز', since: 'از', experience: 'تجربه' }
    },

    b1u14: {
      title: 'حال کامل در برابر گذشتهٔ ساده', goal: 'دیگر نگویید «I have seen him yesterday».',
      points: [
        { h: 'قاعدهٔ طلایی', html: `<p><b>گذشتهٔ ساده</b> = زمان بسته، می‌گوییم کِی: <em>I saw him yesterday.</em></p><p><b>حال کامل</b> = بدون زمان مشخص یا دورهٔ باز: <em>I have seen him.</em></p><p class="ex">I have visited Rome. (نمی‌گویم کِی)<br>I visited Rome in 2019. (تاریخ مشخص)</p>` },
        { h: 'واژه‌های نشانه', html: `<p>گذشتهٔ ساده: <b>yesterday, last week, in 2010, two days ago, when I was a child</b>.</p><p>حال کامل: <b>ever, never, already, yet, just, since, for, so far, recently</b>.</p><p class="warn">✗ I have seen him yesterday. → ✓ I <b>saw</b> him yesterday.</p>` },
        { h: 'ترکیب درست', html: `<p>در یک متن، با حال کامل شروع کنید و با گذشتهٔ ساده جزئیات بدهید.</p><p class="ex">The number of cyclists has risen sharply. In 2020, it doubled.</p>` }
      ],
      vocab: { 'last year': 'سال گذشته', ago: 'پیش', 'so far': 'تا حالا', recently: 'اخیراً', yet: 'هنوز', yesterday: 'دیروز' }
    },

    b1u15: {
      title: 'افعال وجهی: can، should، must، have to', goal: 'نصیحت، اجبار و اجازه.',
      points: [
        { h: 'توانایی و اجازه', html: `<p><b>can</b> (حال) / <b>could</b> (گذشته یا ادب): <em>I can swim. I could swim at five. Could I open the window?</em></p><p>منفی: <em>can't / couldn't</em>.</p>` },
        { h: 'نصیحت و اجبار', html: `<p><b>should / shouldn't</b> = نصیحت: <em>You should see a doctor.</em></p><p><b>must</b> = اجبار قوی یا قانون: <em>You must wear a seatbelt.</em></p><p><b>have to</b> = اجبار بیرونی: <em>I have to work on Saturdays.</em></p>` },
        { h: 'mustn\'t در برابر don\'t have to', html: `<p><b>mustn't</b> = ممنوع: <em>You mustn't smoke here.</em></p><p><b>don't have to</b> = لازم نیست: <em>You don't have to come.</em></p><p class="warn">این دو متضادند: ممنوعیت در برابر نبودِ اجبار.</p>` }
      ],
      vocab: { should: 'باید (نصیحت)', must: 'باید (قوی)', 'have to': 'مجبور بودن', allowed: 'مجاز', advice: 'نصیحت', obligation: 'اجبار' }
    },

    b1u16: {
      title: 'شرطی نوع ۱ و ۲', goal: 'شرط واقعی و فرضی.',
      points: [
        { h: 'شرطی اول (واقعی)', html: `<p><b>If + حال ساده، will + فعل</b>: <em>If it rains, we'll cancel the trip.</em></p><p>همچنین <b>unless</b> (= if not): <em>Unless you study, you'll fail.</em></p><p class="warn">✗ If it will rain... → ✓ If it <b>rains</b>...</p>` },
        { h: 'شرطی دوم (فرضی)', html: `<p><b>If + گذشتهٔ ساده، would + فعل</b>: <em>If I were rich, I would travel.</em></p><p>با I/he/she/it در نوشتار رسمی <b>were</b>: <em>If I were you...</em></p><p class="ex">I'd help you if I had time.</p>` },
        { h: 'کاربردهای واقعی', html: `<p>نصیحت: <em>If I were you, I'd apply.</em></p><p>آرزو: <em>I'd love to live by the sea.</em></p><p>مذاکره: <em>We'll deliver it on Friday if you confirm today.</em></p>` }
      ],
      vocab: { if: 'اگر', unless: 'مگر اینکه', probably: 'احتمالاً', would: 'شرطی (خواستن)', imagine: 'تصور کن', depend: 'بستگی داشتن' }
    },

    b2u17: {
      title: 'شرطی نوع ۳، ترکیبی و wish', goal: 'حرف زدن از پشیمانی و گذشتهٔ فرضی.',
      points: [
        { h: 'شرطی سوم', html: `<p><b>If + had + اسم مفعول، would have + اسم مفعول</b>:</p><p class="ex">If I had known, I would have helped you.</p><p>دربارهٔ گذشته‌ای که دیگر تغییر نمی‌کند.</p>` },
        { h: 'شرطی ترکیبی', html: `<p>شرط گذشته → نتیجهٔ حال:</p><p class="ex">If I had studied medicine, I would be a doctor now.</p><p>شرط حال → نتیجهٔ گذشته: <em>If I weren't so shy, I would have spoken.</em></p>` },
        { h: 'wish / if only', html: `<p><b>wish + گذشته</b> = آرزوی حال: <em>I wish I had more time.</em></p><p><b>wish + had + اسم مفعول</b> = پشیمانی: <em>I wish I had gone to bed earlier.</em></p><p><b>If only</b> = عاطفی‌تر: <em>If only I had listened.</em></p>` }
      ],
      vocab: { regret: 'پشیمانی', wish: 'کاش', 'if only': 'ای کاش', 'would have': 'می‌شد', 'had known': 'می‌دانست', otherwise: 'در غیر این صورت' }
    },

    b2u18: {
      title: 'جملات مجهول', goal: 'لحن بی‌طرف و توصیف فرایندها.',
      points: [
        { h: 'be + اسم مفعول', html: `<p>مفعول به فاعل تبدیل می‌شود: <em>They built the bridge in 1990.</em> → <em>The bridge <b>was built</b> in 1990.</em></p><p>زمان‌ها: <em>is made, was made, will be made, is being made, has been made</em>.</p>` },
        { h: 'مجهول بی‌شخص', html: `<p><b>It is believed / said / reported / estimated that...</b></p><p class="ex">It is estimated that eight million people die each year from smoking.</p><p>جایگزین: <em>Smoking is estimated to cause...</em></p>` },
        { h: 'کِی استفاده کنیم', html: `<p>وقتی کننده مهم نیست یا واضح است: <em>English is spoken here.</em></p><p>برای لحن بی‌طرف در نوشتار: <em>The data were collected in 2024.</em></p><p>اگر مسئول مهم است، معلوم بنویسید: <em>The government introduced the tax.</em></p>` }
      ],
      vocab: { 'was built': 'ساخته شد', 'is believed': 'اعتقاد بر این است', by: 'توسط', process: 'فرایند', report: 'گزارش', announced: 'اعلام شد' }
    },

    b2u19: {
      title: 'جمله‌های موصولی', goal: 'پیوند دادن ایده‌ها بدون جمله‌های کوتاه.',
      points: [
        { h: 'تعیین‌کننده: اطلاعات ضروری', html: `<p><b>who</b> (اشخاص)، <b>which/that</b> (چیزها)، <b>whose</b> (مالکیت)، <b>where</b> (مکان).</p><p class="ex">The woman who lives next door is a doctor.<br>The book that I bought is excellent.</p><p>اگر موصول مفعول باشد، می‌توان حذف کرد: <em>The book (that) I bought...</em></p>` },
        { h: 'غیرتعیین‌کننده: بین دو ویرگول', html: `<p>اطلاعات اضافه می‌دهد؛ اگر حذف شود جمله معنا دارد.</p><p class="ex">Madrid, which is the capital of Spain, has a housing problem.</p><p>اینجا <b>that</b> ممنوع است و موصول حذف نمی‌شود.</p>` },
        { h: 'حرف اضافه + which', html: `<p>رسمی: <em>the period during which... / the extent to which...</em></p><p class="warn">✗ The thing what I need → ✓ The thing (that) I need.</p>` }
      ],
      vocab: { who: 'که (اشخاص)', which: 'که (چیزها)', whose: 'که (مالکیت)', where: 'جایی که', that: 'که', 'during which': 'در طول آن' }
    },

    b2u20: {
      title: 'نقل قول غیرمستقیم', goal: 'گفتن اینکه دیگری چه گفت.',
      points: [
        { h: 'say در برابر tell', html: `<p><b>say</b> + گفتار: <em>She said (that) she was tired.</em></p><p><b>tell</b> + شخص: <em>She told me (that) she was tired.</em></p><p class="warn">✗ She said me → ✓ She told me / She said to me.</p>` },
        { h: 'عقب‌رفتن زمان', html: `<p>حال → گذشته؛ گذشته → گذشتهٔ کامل؛ will → would؛ can → could؛ may → might.</p><p class="ex">"I'm leaving." → He said he was leaving.<br>"I'll call you." → She said she would call me.</p>` },
        { h: 'سؤال و دستور', html: `<p>سؤال: <em>She asked me where I lived.</em> (بدون do/did، ترتیب عادی).</p><p>دستور: <em>The teacher told us to be quiet.</em></p><p>تغییرها: today → that day، tomorrow → the next day، here → there.</p>` }
      ],
      vocab: { said: 'گفت', told: 'به کسی گفت', explained: 'توضیح داد', asked: 'پرسید', 'that day': 'آن روز', 'the next day': 'روز بعد' }
    },

    c1u21: {
      title: 'افعال وجهی کامل و استنتاج', goal: 'استنتاج دربارهٔ گذشته و بیان پشیمانی.',
      points: [
        { h: 'استنتاج در گذشته', html: `<p><b>must have + اسم مفعول</b> = حتماً اتفاق افتاده: <em>She must have left.</em></p><p><b>might/may/could have + اسم مفعول</b> = ممکن است: <em>They might have missed the train.</em></p><p><b>can't have + اسم مفعول</b> = غیرممکن است: <em>He can't have finished already.</em></p>` },
        { h: 'پشیمانی و انتقاد', html: `<p><b>should have + اسم مفعول</b> = باید انجام می‌داد: <em>You should have told me.</em></p><p><b>shouldn't have + اسم مفعول</b> = نباید انجام می‌داد: <em>I shouldn't have said that.</em></p><p><b>needn't have + اسم مفعول</b> = لازم نبود: <em>You needn't have paid.</em></p>` },
        { h: 'جایگزین‌های تلطیف', html: `<p>برای اینکه در آیلتس مطلق‌گرا نباشید:</p><p class="ex">This is likely to be the main cause. · It may well be that... · The evidence suggests that...</p>` }
      ],
      vocab: { 'must have': 'حتماً بوده', 'might have': 'ممکن است بوده', 'cannot have': 'نمی‌تواند بوده باشد', 'should have': 'باید می‌کرد', regret: 'پشیمانی', evidence: 'شواهد' }
    },

    c1u22: {
      title: 'وارونگی و تأکید', goal: 'تأکید با ساختارهای پیشرفته و کنترل‌شده.',
      points: [
        { h: 'وارونگی پس از قید منفی', html: `<p>وقتی جمله با <b>never, rarely, seldom, hardly, not only</b> شروع شود، فعل کمکی پیش از فاعل می‌آید:</p><p class="ex">Never have I seen such a thing.<br>Rarely do people complain about this.<br>Not only did he arrive late, but he also forgot the file.</p>` },
        { h: 'Hardly / No sooner', html: `<p><b>Hardly had + فاعل + اسم مفعول + when...</b></p><p><b>No sooner had + فاعل + اسم مفعول + than...</b></p><p class="ex">Hardly had we arrived when it started to rain.</p>` },
        { h: 'جمله‌های شکاف‌دار (cleft)', html: `<p><b>It is/was ... that ...</b> برای برجسته‌کردن:</p><p class="ex">It was in 2019 that we met. · What I need is more time.</p><p class="warn">حداکثر یکی دو بار در هر متن؛ زیادش مصنوعی می‌شود.</p>` }
      ],
      vocab: { rarely: 'به‌ندرت', hardly: 'به‌سختی', 'not only': 'نه تنها', never: 'هرگز', emphasis: 'تأکید', seldom: 'به‌ندرت' }
    },

    c1u23: {
      title: 'اسم‌سازی و سبک دانشگاهی', goal: 'نوشتن مثل یک متن دانشگاهی، نه مثل چت.',
      points: [
        { h: 'فعل → اسم', html: `<p>decide → <b>decision</b> · increase → <b>increase</b> · implement → <b>implementation</b> · analyse → <b>analysis</b>.</p><p class="ex">The government decided to invest. → The government's decision to invest...</p><p class="ex">Prices rose sharply. → There was a sharp rise in prices.</p>` },
        { h: 'صفت → اسم', html: `<p>efficient → <b>efficiency</b> · weak → <b>weakness</b> · likely → <b>likelihood</b>.</p><p class="ex">The system is efficient. → The efficiency of the system...</p>` },
        { h: 'زیاده‌روی نکنید', html: `<p>اسم‌سازی بیش از حد متن را سنگین می‌کند. با فعل‌های روشن جایگزین کنید.</p><p class="warn">✗ The implementation of the reduction of the consumption... → ✓ The policy reduced consumption...</p>` }
      ],
      vocab: { increase: 'افزایش', reduction: 'کاهش', implementation: 'اجرا', evidence: 'شواهد', analysis: 'تحلیل', tendency: 'گرایش' }
    },

    c1u24: {
      title: 'انسجام، تلطیف و ظرافت', goal: 'پیوند ایده‌ها و بیان محتاطانهٔ ادعاها در سطح C1.',
      points: [
        { h: 'حروف ربط دقیق', html: `<p>تقابل: <b>however, whereas, despite + اسم, although + جمله</b>.</p><p>علت: <b>due to, owing to, as a result, consequently</b>.</p><p class="warn">✗ Despite of the rain → ✓ Despite the rain. · ✗ Although the rain → ✓ Although it rained.</p>` },
        { h: 'ارجاع و جانشینی', html: `<p>از تکرار پرهیز کنید: <b>this, these, such, the former, the latter, do so</b>.</p><p class="ex">Many cities have banned cars. This policy has reduced pollution.</p><p class="ex">Some argue for taxes; others prefer incentives. The latter are easier to implement.</p>` },
        { h: 'تلطیف (hedging)', html: `<p><b>tends to, is likely to, may well, arguably, to some extent, it could be argued that</b>.</p><p class="ex">This tends to be the case in large cities.</p><p class="ex">It could be argued that the benefits outweigh the costs.</p><p>تلطیف ضعف نیست؛ دقت است و حرفه‌ای‌تر به نظر می‌رسد.</p>` }
      ],
      vocab: { however: 'با این حال', therefore: 'بنابراین', whereas: 'در حالی که', arguably: 'قابل بحث است', 'tend to': 'گرایش داشتن', overall: 'در مجموع' }
    }
  }
};
