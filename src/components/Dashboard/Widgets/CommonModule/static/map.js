const geoCoordMap = {
  '海门': [121.15, 31.89],
  '河池': [108.06, 24.7],
  '宜春': [114.41, 27.81],
  '辽阳': [123.237, 41.245],
  '濮阳': [115.03, 35.77],
  '邵阳': [111.5, 27.22],
  '龙岗': [117.03, 25.06],
  '黑河': [127.55, 50.25],
  '安庆': [117.08, 30.57],
  '白银': [104.18, 36.55],
  '湘潭': [112.91, 27.87],
  '沧州': [116.83, 38.33],
  '梧州': [111.34, 23.51],
  '安顺': [105.92, 26.25],
  '淄博': [118.05, 36.78],
  '杭州': [120.19, 30.26],
  '铁岭': [123.737, 42.235],
  '海北藏族自治州': [100.9, 36.97],
  '福州': [119.3, 26.08],
  '天水': [105.69, 34.6],
  '舟山': [122.207216, 29.985295],
  '迪庆藏族自治州': [99.7, 27.83],
  '吴忠': [106.21, 37.99],
  '果洛藏族自治州': [100.23, 34.48],
  '乐山': [103.77, 29.57],
  '通化': [125.98, 41.76],
  '日照': [119.46, 35.42],
  '和田': [79.94, 37.12],
  '韶关': [113.62, 24.84],
  '宝鸡': [107.15, 34.38],
  '河源': [114.68, 23.73],
  '大庆': [125.03, 46.58],
  '泉州': [118.58, 24.93],
  '儋州': [109.57, 19.52],
  '连云港': [119.16, 34.59],
  '攀枝花': [101.72, 26.58],
  '潮州': [116.63, 23.68],
  '石嘴山': [106.39, 39.04],
  '黄山': [118.3, 29.73],
  '保山': [99.17, 25.12],
  '南京': [118.78, 32.04],
  '阿图什': [76.12, 39.73],
  '徐州': [117.2, 34.26],
  '湖州': [120.1, 30.86],
  '株洲': [113.16, 27.83],
  '安康': [109.02, 32.7],
  '赤峰，118.87': [42.28, 0.0],
  '柳州': [109.4, 24.33],
  '绍兴': [120.58, 30.01],
  '金昌': [102.18, 38.5],
  '重庆': [106.54, 29.59],
  '阿里地区': [80.1, 32.5],
  '营口': [122.18, 40.65],
  '玉溪': [102.52, 24.35],
  '伊春': [128.98, 47.7],
  '巴彦淖尔，107.42': [40.74, 0.0],
  '吐鲁番': [89.19, 42.91],
  '宁德': [119.55, 26.66],
  '葫芦岛': [120.836932, 40.711052],
  '庆阳': [107.88, 36.03],
  '辽源': [125.182, 42.9],
  '兰州': [103.73, 36.03],
  '遵义': [106.9, 27.7],
  '自贡': [104.78, 29.35],
  '乌鲁木齐': [87.68, 43.77],
  '周口': [114.65, 33.62],
  '墨江哈尼族自治县': [101.68, 23.43],
  '咸阳': [108.72, 34.36],
  '呼和浩特': [111.65, 40.82],
  '拉萨': [91.11, 29.97],
  '常德': [111.69, 29.05],
  '洛阳': [112.44, 34.7],
  '信阳': [114.07, 32.13],
  '莆田': [119.05, 25.44],
  '清远': [113.01, 23.7],
  '张掖': [100.46, 38.93],
  '北京': [116.46, 39.92],
  '佛山': [113.11, 23.05],
  '齐齐哈尔': [123.97, 47.33],
  '宣城': [118.75, 30.96],
  '嘉兴': [120.76, 30.77],
  '秦皇岛': [119.57, 39.95],
  '楚雄彝族自治州': [101.55, 25.03],
  '眉山': [103.83, 30.05],
  '抚州': [116.41, 27.97],
  '德宏傣族景颇族自治州': [98.58, 24.43],
  '普洱': [101.03, 23.07],
  '景德镇': [117.2, 29.28],
  '铜川': [109.11, 35.09],
  '长春': [125.35, 43.88],
  '泰安': [117.13, 36.18],
  '呼伦贝尔，119.78': [49.2, 0.0],
  '鞍山': [122.85, 41.12],
  '海西蒙古族藏族自治州': [97.37, 37.37],
  '阳江': [111.95, 21.85],
  '商洛': [109.93, 33.87],
  '鹤岗': [130.26, 47.36],
  '上海': [121.48, 31.22],
  '吉林': [126.57, 43.87],
  '沈阳': [123.38, 41.8],
  '上饶': [117.99, 28.47],
  '益阳': [112.33, 28.6],
  '曲靖': [103.79, 25.51],
  '吉安': [114.94, 27.1],
  '永州': [111.63, 26.22],
  '常州': [119.95, 31.79],
  '广元': [105.83, 32.43],
  '巴中': [106.73, 31.86],
  '昌都地区': [97.18, 31.13],
  '克拉玛依': [84.77, 45.59],
  '日喀则': [88.82, 29.28],
  '朝阳': [120.457, 41.6],
  '新乡': [113.93, 35.32],
  '海东地区': [102.12, 36.5],
  '延边朝鲜族自治州': [129.18, 43.16],
  '临汾': [111.5, 36.08],
  '蚌埠': [117.45, 32.89],
  '南充': [106.08, 30.78],
  '昆明': [102.73, 25.04],
  '包头': [110.0, 40.58],
  '临沂': [118.35, 35.05],
  '渭南': [109.5, 34.52],
  '赣州': [114.94, 25.88],
  '聊城': [115.97, 36.45],
  '鹤壁': [114.3, 35.75],
  '牡丹江': [129.58, 44.6],
  '肇庆': [112.44, 23.05],
  '中卫': [105.18, 37.51],
  '温州': [120.65, 28.01],
  '山南地区': [91.77, 29.23],
  '榆林': [109.77, 38.3],
  '嘉峪关': [98.27, 39.8],
  '绥化': [127.03, 46.68],
  '鄂尔多斯，109.781327': [39.608266, 0.0],
  '成都': [104.06, 30.67],
  '广安': [106.61, 30.48],
  '泰州': [119.9, 32.49],
  '阿勒泰': [88.13, 47.85],
  '阳泉': [113.57, 37.85],
  '淮北': [116.85, 33.99],
  '长沙': [113.0, 28.21],
  '阿坝': [101.72, 31.93],
  '鹰潭': [117.1, 28.3],
  '晋城': [112.86, 35.486],
  '盐城': [120.13, 33.38],
  '本溪': [123.73, 41.3],
  '四平': [124.38, 43.16],
  '惠州': [114.4, 23.09],
  '通辽，122.3': [43.65, 0.0],
  '云浮': [112.02, 22.93],
  '三门峡': [111.2, 34.78],
  '来宾': [109.24, 23.76],
  '焦作': [113.21, 35.24],
  '临沧': [100.08, 23.88],
  '烟台': [121.39, 37.52],
  '扬州': [119.42, 32.39],
  '白城': [122.832, 45.62],
  '苏州': [120.62, 31.32],
  '南宁': [108.33, 22.84],
  '吕梁': [111.15, 37.55],
  '阜新': [121.667, 42.045],
  '漳州': [117.65, 24.53],
  '厦门': [118.1, 24.46],
  '阿拉善盟，104.367': [40.0, 0.0],
  '汉中': [108.04, 33.07],
  '丹东': [124.37, 40.13],
  '开封': [114.35, 34.79],
  '铜陵': [117.85, 30.97],
  '东莞': [113.75, 23.04],
  '石家庄': [114.48, 38.03],
  '德州': [116.29, 37.45],
  '佳木斯': [130.36, 46.79],
  '黔南布依族苗族自治州': [107.52, 26.27],
  '长治': [113.08, 36.18],
  '承德': [117.93, 40.97],
  '天津': [117.2, 39.13],
  '娄底': [111.96, 27.71],
  '莱芜': [117.67, 36.19],
  '平顶山': [113.29, 33.75],
  '怀化': [109.95, 27.52],
  '甘南藏族自治州': [102.92, 34.98],
  '菏泽': [115.480656, 35.23375],
  '玉林': [110.14, 22.64],
  '淮南': [116.999, 32.68],
  '博尔塔拉': [82.07, 44.9],
  '七台河': [131.01, 45.76],
  '芜湖': [118.38, 31.33],
  '抚顺': [123.97, 41.97],
  '三明': [117.63, 26.26],
  '定西': [104.57, 35.57],
  '乌海，106.8': [39.65, 0.0],
  '滁州': [118.33, 32.302],
  '驻马店': [114.02, 32.98],
  '广州': [113.23, 23.16],
  '郑州': [113.65, 34.76],
  '盘锦': [122.070714, 41.119997],
  '毕节': [105.29, 27.32],
  '海口': [110.35, 20.02],
  '许昌': [113.83, 34.03],
  '朔州': [112.4, 39.35],
  '忻州': [112.744, 38.45],
  '大兴安岭地区': [124.03, 52.38],
  '北海': [109.12, 21.49],
  '甘孜': [99.96, 31.64],
  '无锡': [120.29, 31.59],
  '枣庄': [117.57, 34.86],
  '晋中': [112.78, 37.666],
  '德阳': [104.37, 31.13],
  '临夏': [103.22, 35.62],
  '哈尔滨': [126.63, 45.75],
  '淮安': [119.03, 33.58],
  '武威': [102.61, 37.94],
  '保定': [115.48, 38.85],
  '延安': [109.47, 36.6],
  '大理白族自治州': [100.23, 25.6],
  '喀什地区': [75.98, 39.47],
  '茂名': [110.88, 21.68],
  '阿克苏': [80.29, 41.15],
  '兴义': [104.9, 25.08],
  '江门': [113.06, 22.61],
  '漯河': [114.02, 33.58],
  '锦州': [121.15, 41.13],
  '唐山': [118.02, 39.63],
  '鸡西': [130.96, 45.3],
  '遂宁': [105.58, 30.52],
  '深圳': [114.07, 22.62],
  '内江': [105.04, 29.59],
  '昌吉': [87.31, 44.05],
  '汕头': [116.69, 23.39],
  '池州': [117.55, 30.66],
  '雅安': [102.97, 29.97],
  '铜仁': [109.21, 27.73],
  '郴州': [113.0, 25.79],
  '黔东南苗族侗族自治州': [107.97, 26.58],
  '张家口': [114.87, 40.82],
  '资阳': [104.6, 30.19],
  '东营': [118.49, 37.46],
  '昭通': [103.7, 29.32],
  '亳州': [115.75, 33.79],
  '海南藏族自治州': [100.62, 36.28],
  '阜阳': [115.85, 32.89],
  '宁波': [121.56, 29.86],
  '贵港': [109.6, 23.1],
  '金华': [119.64, 29.12],
  '文山壮族苗族自治州': [104.25, 23.37],
  '贵阳': [106.71, 26.57],
  '潍坊': [119.1, 36.62],
  '西双版纳傣族自治州': [100.8, 22.02],
  '凉山彝族自治州': [102.27, 27.9],
  '合肥': [117.27, 31.86],
  '商丘': [115.65, 34.45],
  '桂林': [110.28, 25.29],
  '珠海': [113.52, 22.3],
  '白山': [126.45, 41.94],
  '青岛': [120.33, 36.07],
  '大连': [121.62, 38.92],
  '威海': [122.1, 37.5],
  '丽水': [119.92, 28.45],
  '邢台': [114.48, 37.05],
  '南昌': [115.89, 28.68],
  '怒江傈僳族自治州': [98.85, 25.85],
  '新余': [114.91, 27.83],
  '酒泉': [98.5, 39.71],
  '马鞍山': [118.48, 31.56],
  '南通': [121.05, 32.08],
  '宜宾': [104.56, 29.77],
  '九江': [115.97, 29.71],
  '衢州': [118.88, 28.97],
  '武汉': [114.31, 30.52],
  '崇左': [107.37, 22.42],
  '那曲地区': [92.07, 31.48],
  '银川': [106.27, 38.47],
  '六安': [116.65, 31.69],
  '南阳': [112.52, 33.0],
  '三亚': [109.5, 18.25],
  '三沙': [112.35, 16.84],
  '百色': [106.62, 23.91],
  '黄南藏族自治州': [102.02, 35.52],
  '黄石': [115.03, 30.2],
  '平凉': [106.68, 35.51],
  '太原': [112.53, 37.87],
  '安阳': [114.35, 36.1],
  '济南': [117.0, 36.65],
  '锡林郭勒盟，115.067': [44.4, 0.0],
  '廊坊': [116.7, 39.53],
  '丽江': [100.25, 26.86],
  '玉树藏族自治州': [97.02, 33.0],
  '大同': [113.3, 40.12],
  '绵阳': [104.73, 31.48],
  '巴音郭楞': [86.15, 41.77],
  '陇南': [104.92, 33.4],
  '衡水': [115.72, 37.72],
  '衡阳': [112.61, 26.89],
  '台州': [121.420757, 28.656386],
  '萍乡': [113.84, 27.63],
  '兴安盟，122.067': [46.1, 0.0],
  '宿迁': [118.3, 33.96],
  '镇江': [119.44, 32.2],
  '揭阳': [116.35, 23.55],
  '钦州': [108.61, 21.96],
  '岳阳': [113.09, 29.37],
  '泸州': [105.39, 28.91],
  '林芝': [94.25, 29.59],
  '松原': [124.88, 45.16],
  '中山': [113.38, 22.52],
  '防城港': [108.35, 21.7],
  '运城': [111.0, 35.0],
  '固原': [106.28, 36.01],
  '乌兰察布，113.22': [41.0, 0.0],
  '达州': [107.5, 31.22],
  '塔城': [82.98, 46.75],
  '西宁': [101.74, 36.56],
  '宿州': [116.99, 33.65],
  '梅州': [116.1, 24.55],
  '哈密': [93.44, 42.78],
  '贺州': [111.55, 24.42],
  '南平': [118.2, 26.67],
  '滨州': [118.03, 37.36],
  '西安': [108.95, 34.27],
  '伊犁哈萨克': [81.32, 43.92],
  '双鸭山': [131.18, 46.66],
  '济宁': [116.59, 35.38],
  '石河子': [86.03, 44.3]
}

const provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen', 'taiwan']
const provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门', '台湾']

export default { geoCoordMap, provinces, provincesText }
