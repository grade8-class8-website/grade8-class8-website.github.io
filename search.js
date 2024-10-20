
    const hotword = {
      '神马': { year: '2019', explanation: '表示震惊' },
      '阿米诺斯': { year: '2024', explanation: '骂人' },
      '绝绝子': { year: '2021', explanation: '表示极好、非常棒' },
      '破防了': { year: '2021', explanation: '表示心理防线被突破' },
      'yyds': { year: '2021', explanation: '永远的神' },
      '摆烂': { year: '2022', explanation: '指事情已经无法向好的方向发展，于是就干脆不再采取措施加以控制而是任由其往坏的方向继续发展下去' },
      '凡尔赛': { year: '2020', explanation: '以低调的方式进行炫耀' },
      '瑞思拜': { year: '2020', explanation: '表示尊敬、佩服' },
      '栓 Q': { year: '2022', explanation: '表示感谢' },
      '钝角': { year: '2022', explanation: '一种无厘头的抽象概念，常被用于调侃和玩梗' },
      '芭比 Q 了': { year: '2022', explanation: '表示事情糟糕了、完了' },
      '奥力给': { year: '2019', explanation: '表示加油、鼓劲' },
      '干饭人': { year: '2020', explanation: '热衷于吃饭的人' },
      '内卷': { year: '2020', explanation: '指非理性的内部竞争' },
      '躺平': { year: '2021', explanation: '表示不努力、不奋斗，选择安逸的生活方式' },
      '社交牛 X 症': { year: '2021', explanation: '形容在社交场合毫不胆怯、游刃有余的人' },
      'emo': { year: '2021', explanation: '表示情绪低落、抑郁' },
      '拿来吧你': { year: '2021', explanation: '表示索要、占有某物的强烈愿望' },
      '小丑竟是我自己': { year: '2021', explanation: '形容发现自己在某件事情中扮演了可笑的角色' },
      '夺笋啊': { year: '2021', explanation: '表示某人的行为很损、很缺德' },
      '勇敢牛牛，不怕困难': { year: '2021', explanation: '表示勇敢面对困难的决心' },
      'U1S1': { year: '2021', explanation: '表示说实话、平心而论' },
      '咱就是说': { year: '2021', explanation: '用于引出自己的观点或话题' },
      '一整个爱住': { year: '2021', explanation: '表示非常喜欢、爱上了' },
      '快乐星球': { year: '2021', explanation: '代表一种充满快乐和幸福的地方或状态' },
      '废话文学': { year: '2021', explanation: '一种看似说了很多话但实际上没有提供多少有用信息的语言风格' },
      '通哈膨胀': { year: '2021', explanation: '指在网络交流中，“哈哈”等表示笑声的词汇使用过多，导致其表达的喜悦程度逐渐降低' },
      '社交恐惧症': { year: '2021', explanation: '在社交场合感到紧张、不安的心理状态' },
      '社交牛杂症': { year: '2021', explanation: '在社交场合时而勇敢、时而胆怯的状态' },
      '纯欲风': { year: '2021', explanation: '一种既清纯又有欲望感的风格' },
      '氛围感': { year: '2021', explanation: '指通过环境、氛围等因素营造出的一种感觉' },
      '沉浸式': { year: '2021', explanation: '指完全投入到某种活动或体验中，不受外界干扰' },
      '高情商 VS 低情商': { year: '2021', explanation: '对比高情商和低情商的表达方式' },
      '人类高质量 XX': { year: '2021', explanation: '形容高质量的人或事物' },
      '拿来主义': { year: '2021', explanation: '指不加分析地全盘接受外来事物' },
      '打工人': { year: '2020', explanation: '对上班族的一种自嘲称呼' },
      '尾款人': { year: '2020', explanation: '指在购物活动中支付尾款的消费者' },
      '后浪': { year: '2020', explanation: '指年轻一代，寓意着他们有无限的潜力和希望' },
      '集美': { year: '2020', explanation: '姐妹的亲昵称呼' },
      '工具人': { year: '2020', explanation: '指被他人利用、没有自我的人' },
      '海王': { year: '2020', explanation: '指同时与多个异性保持暧昧关系的人' },
      '舔狗': { year: '2020', explanation: '指在感情中一味付出、讨好对方的人' },
      '普信男/女': { year: '2021', explanation: '指普通却过度自信的男性/女性' },
      '大冤种': { year: '2022', explanation: '形容因蒙受冤屈而闷闷不乐的人' },
      '雪糕刺客': { year: '2022', explanation: '指那些价格昂贵、让人在结账时感到意外的雪糕' },
      '电子榨菜': { year: '2022', explanation: '指在吃饭时观看的视频、节目等，如同榨菜一样下饭' },
      '显眼包': { year: '2023', explanation: '形容人做事张扬，容易引起他人注意，略带调侃意味' },
      '挖呀挖呀挖': { year: '2023', explanation: '一首热门儿歌的歌词，因网络传播而走红' },
      '特种兵旅游': { year: '2023', explanation: '指以高强度、高效率的方式进行旅游，在短时间内游览多个景点' },
      '多巴胺穿搭': { year: '2023', explanation: '指通过色彩鲜艳的服装搭配来激发快乐和积极情绪的穿搭风格' },
      '发疯文学': { year: '2022', explanation: '一种用大段大段的文字来模拟人发疯抓狂时说的话，给人一种“无理取闹”的感觉' },
      '废话文学大师': { year: '2021', explanation: '擅长运用废话文学的人' },
      '野生 XX': { year: '2022', explanation: '形容非专业、自然生长的事物或人，如野生摄影师等' },
      '孤勇者小孩': { year: '2022', explanation: '指喜欢唱《孤勇者》这首歌的小孩' },
      '科技与狠活': { year: '2022', explanation: '指食品中使用了科技手段和大量添加剂等不良成分' },
      '网课学困生': { year: '2020', explanation: '指在网课学习中遇到困难、学习效果不佳的学生' },
      '996': { year: '2019', explanation: '一种工作制度，即早上 9 点上班，晚上 9 点下班，每周工作 6 天' },
      '007': { year: '2020', explanation: '一种更为严苛的工作制度，即每天工作 24 小时，每周工作 7 天' },
      '凡尔赛文学大师': { year: '2020', explanation: '擅长运用凡尔赛文学的人' },
      '双向奔赴': { year: '2021', explanation: '形容两个人互相喜欢、努力靠近对方的感情状态' },
      '野性消费': { year: '2021', explanation: '指消费者在情绪驱动下进行的冲动消费行为' },
      '格局打开': { year: '2021', explanation: '表示要有更广阔的视野和胸怀，不要局限于小的利益和格局' },
      'emo 文学': { year: '2021', explanation: '一种表达悲伤、抑郁等负面情绪的文学风格' },
      '破圈': { year: '2020', explanation: '指某个事物突破了原本的圈子，被更多人所了解和接受' },
      '斜杠青年': { year: '2020', explanation: '指拥有多种职业和身份的年轻人' },
      '打 call': { year: '2017', explanation: '表示支持、加油、助威' },
      'C 位': { year: '2018', explanation: '指中心位置，通常用于形容在团队或场合中处于最重要、最突出的位置' },
      '颜值即正义': { year: '2016', explanation: '一种认为外貌美丽就是正确、合理的观点' },
      '小确幸': { year: '2015', explanation: '指微小而确实的幸福' },
      '佛系': { year: '2017', explanation: '一种追求平和、淡然的生活态度' },
      '种草': { year: '2015', explanation: '指把某个产品或事物推荐给别人，让别人也产生购买或尝试的欲望' },
      '拔草': { year: '2015', explanation: '指不再对某个产品或事物感兴趣，取消购买或尝试的计划' },
      '吃土': { year: '2015', explanation: '指因购物等原因导致经济拮据，只能吃土过日子' },
      '断舍离': { year: '2013', explanation: '一种生活理念，主张舍弃不必要的物品，追求简洁、自由的生活方式' },
      '治愈系': { year: '2012', explanation: '指能够给人带来温暖、安慰和治愈感觉的事物或人' },
      '萌宠': { year: '2011', explanation: '可爱的宠物' },
      '女神/男神': { year: '2010', explanation: '指容貌美丽、气质出众的女性/男性，被人们崇拜和仰慕' },
      '网红': { year: '2015', explanation: '指在网络上走红的人或事物' },
      '直播带货': { year: '2019', explanation: '通过直播的方式销售商品' },
      '云吸猫/狗': { year: '2017', explanation: '指通过网络观看猫咪/狗狗的图片、视频等，满足对宠物的喜爱之情' },
      '凡尔赛文学': { year: '2020', explanation: '一种以低调的方式进行炫耀的文学风格' },
      '打工人，打工魂': { year: '2020', explanation: '表达打工人的奋斗精神和自嘲心态' },
      '尾款人，冲啊': { year: '2020', explanation: '尾款人在支付尾款时的口号，表达了一种购物的热情和决心' },
      '秋天的第一杯奶茶': { year: '2020', explanation: '一种在秋天到来时，表达关爱和温暖的方式，通常是送一杯奶茶给对方' },
      '一起爬山吗': { year: '2020', explanation: '源于电视剧《隐秘的角落》，带有一种神秘、恐怖的氛围，常被用于调侃或开玩笑' },
      '淡黄的长裙，蓬松的头发': { year: '2020', explanation: '一句歌词，因在综艺节目中被演唱而走红，成为网络热梗' }
    };

    function searchByChar(char) {
      const results = [];
      for (const key in hotword) {
        if (key.includes(char)) {
          results.push({ key, value: hotword[key] });
        }
      }
      return results.length > 0? results : null;
    }

function search() {
      const input = document.getElementById('searchInput').value;
      const results = searchByChar(input);
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';
      if (results === null) {
        resultsDiv.innerHTML = '没有找到结果。';
      } else {
        results.forEach(item => {
          const resultItem = document.createElement('div');
          resultItem.classList.add('result-item');
          const hotwordElement = document.createElement('div');
          hotwordElement.classList.add('hotword');
          hotwordElement.textContent = item.key;
          const explanationElement = document.createElement('div');
          explanationElement.classList.add('explanation');
          explanationElement.textContent = item.value.explanation;
          const yearElement = document.createElement('div');
          yearElement.classList.add('year');
          yearElement.textContent = item.value.year;
          resultItem.appendChild(hotwordElement);
          resultItem.appendChild(explanationElement);
          resultItem.appendChild(yearElement);
          resultsDiv.appendChild(resultItem);
        });
      }
}
