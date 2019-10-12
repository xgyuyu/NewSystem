const typeList = new Map([
    ['jxzbUp', '教学指标-与上年度同期相比-上升'],
    ['jxzbDown', '教学指标-与上年度同期相比-下降'],
    ['lszg', '与历史所有年度相比-历史最高'],
    ['lszd', '与历史所有年度相比-历史最低'],
    ['ndzkUp', '与历史变化均速相比-年度速升'],
    ['ndzkDown', '与历史变化均速相比-年度速降'],
    ['ndbhgBb', '年度不合格指标-部标'],
    ['ndbhgXb', '年度不合格指标-校标'],
    ['ndbhGs', '与历史变化均速相比-改善'],
    ['ndbhEh', '与历史变化均速相比-恶化'],
    ['all', '全部指标'],
])
const titleArr = new Map([
    [0, '当年招生'],
    [1, '当年在校生'],
    [2, '各类本科学历在校生信息'],
    [3, '当年招生方式'],
    [4, '机构设置'],
    [5, '管理信息系统'],
    [6, '基本状况'],
    [7, '占地、建筑面积'],
    [8, '馆藏图书资料'],
    [9, '阅览室、多媒体教室、语音室、机房'],
    [10, '校园网'],
    [11, '固定资产'],
    [12, '校内实践基地'],
    [13, '校外实习实训基地'],
    [14, '职业技能鉴定机构'],
    [15, '经费收入'],
    [16, '经费支出'],
    [17, '校内专任教师基本情况'],
    [18, '校内专任教师授课情况'],
    [19, '校内专任教师其他情况'],
    [20, '校内兼课人员基本情况'],
    [21, '校内兼课人员授课情况'],
    [22, '校内兼课人员其他情况'],
    [23, '校外兼职教师基本情况'],
    [24, '职业技能鉴定机构'],
    [25, '职业技能鉴定机构'],
    [26, '职业技能鉴定机构'],
    [27, '职业技能鉴定机构'],
    [28, '职业技能鉴定机构'],
    [29, '职业技能鉴定机构'],
    [30, '职业技能鉴定机构'],
    [31, '职业技能鉴定机构'],
    [32, '职业技能鉴定机构'],
    [33, '职业技能鉴定机构'],
    [34, '职业技能鉴定机构'],
])
const dnzsArr = new Map([
    ['0-0', '专业设置数'],
    ['0-1', '当年招生专业数'],
    ['0-2', '当年招生专业占设置专业的比例'],
    ['0-3', '当年全日制高职招生数'],
    ['0-4', '普通高中生'],
    ['0-5', '“三校生”单招'],
    ['0-6', '“3+2”招生'],
    ['0-7', '五年制第4学年'],
    ['0-8', '其他'],
    ['0-9', '全日制高职专业设置数（个）（不含方向）'],
    ['0-10', '全日制高职招生专业数（个）（不含方向）'],
    ['0-11', '普通高中生比例（%）'],
    ['0-12', '“三校生”单招比例（%）'],
    ['0-13', '“3+2”招生比例（%）'],
    ['0-14', '五年制第4学年比例（%）'],
    ['0-15', '其他比例（%）'],
    ['1-0', '全日制高职在校生（人）'],
    ['1-1', '高中起点（人）'],
    ['1-2', '高中起点比例（%）'],
    ['1-3', '中职起点（人）'],
    ['1-4', '中职起点比例（%）'],
    ['1-5', '其他'],
    ['1-6', '全日制中职在校生（人）'],
    ['1-7', '全日制五年一贯制在校生（人）'],
    ['1-8', '全日制成人高职在校生（人）'],
    ['1-9', '全日制成人中职在校生（人）'],
    ['1-10', '各类本科学历在校生（人）'],
    ['1-11', '非全日制专科学历教育注册生（人）'],
    ['1-12', '非全日制本科学历教育注册生（人）'],
    ['1-13', '培训（人天）'],
    ['1-14', '中职起点五年制后二年人数'],
    ['1-15', '全日制中职五年制前三年人数'],
    ['1-16', '社会培训（人天）'],
    ['1-17', '在校生培训（人天）'],
    ['1-18', '折合在校生数（人）'],
    ['1-19', '全日制在校生数（人）'],
    ['1-20', '新型职业农民数（人）'],
    ['1-21', '特定群体培训对象（人次）'],
    ['1-22', '小微企业培训对象（人次）'],
    ['1-23', '境外留学生数'],
    ['1-24', '国外留学生数'],
    ['1-25', '预科生、进修生、成人脱产班学生数合计'],
    ['1-26', '夜大（业余）学生数'],
    ['1-27', '函授生数'],
    ['2-0', '专业数'],
    ['2-1', '人数'],
    ['3-0', '全日制高职招生数'],
    ['3-1', '全国统考招生数'],
    ['3-2', '省市统考招生数'],
    ['3-3', '自主招生招生数'],
    ['3-4', '直升入学招生数'],
    ['3-5', '单独招生招生数'],
    ['3-6', '中职推优招生数'],
    ['3-7', '其他招生数'],
    ['3-8', '基于高考的”知识+技能“招生比例（%）'],
    ['3-9', '对口招生招生数（人）'],
    ['3-10', '对口招生比例（%）'],
    ['3-11', '综合评价招生招生数（人）'],
    ['3-12', '综合评价招生比例（%）'],
    ['3-13', '中高职贯通招生招生数（人）'],
    ['3-14', '中高职贯通招生比例（%）'],
    ['3-15', '技能拔尖人才免试招生招生数（人）'],
    ['3-16', '全国统考比例（%）'],
    ['3-17', '省市统考比例（%）'],
    ['3-18', '自主招生比例（%）'],
    ['3-19', '直升入学比例（%）'],
    ['3-20', '单独招生比例（%）'],
    ['3-21', '中职推优比例（%）'],
    ['3-22', '其他比例（%）'],
    ['3-23', '基于高考的”知识+技能“招生数（人）'],
    ['3-24', '技能拔尖人才免试招生比例（%）'],
    ['4-0', '机构数'],
    ['4-1', '专职教职工数'],
    ['4-2', '兼职教职工数'],
    ['5-0', '系统数量（个）'],
    ['6-0', '院校领导总人数'],
    ['7-0', '学校产权建筑面积（平方米）'],
    ['7-1', '非学校产权建筑面积（平方米）'],
    ['7-2', '教学行政用房面积（平方米）'],
    ['7-3', '教学科研及辅助用房面积（平方米）'],
    ['7-4', '专用科研用房面积（平方米）'],
    ['7-5', '会堂面积（平方米）'],
    ['7-6', '行政办公用房面积（平方米）'],
    ['7-7', '占地面积（平方米）'],
    ['7-8', '总建筑面积（平方米）'],
    ['7-9', '普通教师面积（平方米）'],
    ['7-10', '一体化教室面积（平方米）'],
    ['7-11', '图书馆面积（平方米）'],
    ['7-12', '实践场所面积（平方米）'],
    ['7-13', '学生宿舍面积（平方米）'],
    ['7-14', '食堂面积（平方米）'],
    ['7-15', '运动场馆面积（平方米）'],
    ['7-16', '当年新增校舍面积（平方米）'],
    ['7-17', '绿化用地面积（平方米）'],
    ['7-18', '生活用房面积（平方米）'],
    ['7-19', '学生食堂面积（平方米）'],
    ['7-20', '教工宿舍（公寓）面积（平方米）'],
    ['7-21', '教工食堂面积（平方米）'],
    ['7-22', '生活福利及附属用房面积（平方米）'],
    ['7-23', '教工住宅面积（平方米）'],
    ['7-24', '其他用房面积（平方米）'],
    ['8-0', '纸质图书数（万册）'],
    ['8-1', '纸质专业图书数（万册）'],
    ['8-2', '纸质近二年出版专业图书数（万册）'],
    ['8-3', '电子图书数（册）'],
    ['8-4', '电子专业图书数（册）'],
    ['8-5', '电子近二年出版专业图书数（册）'],
    ['8-6', '中文纸质专业期刊数（种）'],
    ['8-7', '外文纸质专业期刊数（种）'],
    ['8-8', '电子专业期刊数（种）'],
    ['8-9', '本学年新增纸质图书册数（万册）'],
    ['8-10', '电子图书总字节数（GB）'],
    ['8-11', '本学年电子图书新增字节数（GB）'],
    ['9-0', '机房数量（个）'],
    ['9-1', '机房座位数（个）'],
    ['9-2', '机房周均开放时间（小时）'],
    ['9-3', '教学用计算机总数（台）'],
    ['9-4', '阅览室数量（个）'],
    ['9-5', '阅览室座位数（个）'],
    ['9-6', '阅览室周均开放时间（小时）'],
    ['9-7', '多媒体数量看（个）'],
    ['9-8', '多媒体座位数（个）'],
    ['9-9', '多媒体周均开放时间（小时）'],
    ['9-10', '语音实验室座位数（个）'],
    ['9-11', '公共机房计算机数（台）'],
    ['9-12', '专业机房计算机数（台）'],
    ['9-13', '计算机总数（台）'],
    ['9-14', '平板电脑数（台）'],
    ['9-15', '教室总数（间）'],
    ['9-16', '网络多媒体教室数（间）'],
    ['10-0', '接入总带宽（MB）'],
    ['10-1', '出口总带宽（Mbps）'],
    ['10-2', '校园网主干最大带宽（Mbps）'],
    ['10-3', '网络信息点数（个）'],
    ['10-4', '管理信息系统数据总量（GB）'],
    ['10-5', '电子邮件系统用户数（个）'],
    ['10-6', '上网课程数（门）'],
    ['10-7', '数字资源量（GB）'],
    ['10-8', '电子图书量（GB）'],
    ['11-0', '全校总值（万元）'],
    ['11-1', '教学、科研仪器设备资产总值（万元）'],
    ['11-2', '教学、科研仪器设备资产当年新增值（万元）'],
    ['12-0', '基地数量'],
    ['12-1', '占地面积（平方米）'],
    ['12-2', '建筑面积（平方米）'],
    ['12-3', '设备总价值（万元）'],
    ['12-4', '当年购置设备总价值（万元）'],
    ['12-5', '自主研制设备总价值（万元）'],
    ['12-6', '社会（准）捐赠设备总价值（万元）'],
    ['12-7', '设备总数（台套）'],
    ['12-8', '大型设备数（台套）'],
    ['12-9', '校内学生使用频率（人时）'],
    ['12-10', '社会学年使用频率（人时）'],
    ['12-11', '年原材料（耗材）费用（万元）'],
    ['12-12', '年设备维护费用（万元）'],
    ['12-13', '专职管理人员数'],
    ['12-14', '兼职管理人员数'],
    ['12-15', '周公共开放学时数（学时）'],
    ['12-16', '社会捐赠设备值（万元）'],
    ['12-17', '社会准捐赠设备值（万元）'],
    ['12-18', '工位数（个）'],
    ['13-0', '基地数量'],
    ['13-1', '年接待学生量（人次）'],
    ['13-2', '基地年使用时间（天）'],
    ['13-3', '其中年接受半年顶岗实习学生数（人）'],
    ['13-4', '基地派专职指导老师（人次）'],
    ['13-5', '学生派指导教师/学生管理人员（人次）'],
    ['13-6', '学校向基地支付专项实习经费（元/生）'],
    ['13-7', '年接收毕业生就业数（人）'],
    ['14-0', '职业技能鉴定站（所）数量'],
    ['14-1', '鉴定工种/证书数量'],
    ['14-2', '社会鉴定数（人次）'],
    ['14-3', '在校生鉴定数（人次）'],
    ['15-0', '学费收入（万元）'],
    ['15-1', '财政经常性补助收入（万元）'],
    ['15-2', '中央、地方财政专项投入（万元）'],
    ['15-3', '社会（准）捐赠（万元）'],
    ['15-4', '贷款余额（万元）'],
    ['15-5', '学校总收入（万元）'],
    ['15-6', '其他收入总额（万元）'],
    ['15-7', '财政拨款总额（万元）'],
    ['15-8', '政府购买服务到款（万元）'],
    ['15-9', '技术服务到款额（万元）'],
    ['15-10', '贷款金额（万元）'],
    ['16-0', '年学校总支出（万元）'],
    ['16-1', '征地（万元）'],
    ['16-2', '基础设施建设（万元）'],
    ['16-3', '设备采购合计（万元）'],
    ['16-4', '教学仪器设备值（万元）'],
    ['16-5', '日常教学经费生均（万元）'],
    ['16-6', '日常教学经费合计（万元）'],
    ['16-7', '日常教学经费实（验）训耗材（万元）'],
    ['16-8', '日常教学经费实习专项（万元）'],
    ['16-9', '日常教学经费聘请兼职教师经费（万元）'],
    ['16-10', '日常教学经费体育维持费（万元）'],
    ['16-11', '教学改革及研究合计（万元）'],
    ['16-12', '师资建设（万元）'],
    ['16-13', '其他支出总额（万元）'],
    ['16-14', '其他日常经费（万元）'],
    ['16-15', '还贷金额（万元）'],
    ['16-16', '图书购置费（万元）'],
    ['17-0', '教学名师人数'],
    ['17-1', '专业教师人数'],
    ['17-2', '校内专任教师总人数'],
    ['17-3', '具有专业技术职务人数'],
    ['17-4', '具有职业资格证书人数'],
    ['17-5', '专业带头人数'],
    ['17-6', '骨干教师人数'],
    ['17-6', '双师素质人数'],
    ['18-0', '本学年A类授课总学时'],
    ['18-1', '本学年B类授课总学时'],
    ['18-2', '本学年C类授课总学时'],
    ['18-3', '本学年总课程数'],
    ['18-4', '教师总人数'],
    ['18-5', '本学年授课总学时'],
    ['19-0', '培训进修时间（天）'],
    ['19-1', '挂职锻炼时间（天）'],
    ['19-2', '挂职锻炼时间（天）'],
    ['19-3', '主持获奖项目（包括行政性奖励）数'],
    ['19-4', '主持获奖技术专利（技术发明）项目数'],
    ['19-5', '主持在研教学改革课题到款额度（元）'],
    ['19-6', '公开出版著作与公开发表论文作者数'],
    ['19-7', '获技术专利（技术发明）项目数'],
    ['19-8', '主持在研教学改革课题完成人数'],
    ['19-9', '主持在研课题到款额度（元）'],
    ['19-10', '主持在研课题完成人数（个）'],
    ['19-11', '主持在研课题数（个）'],
    ['19-12', '主持在研横向课题数（个）'],
    ['19-13', '主持在研技术开发（攻关）课题到款额度（元）'],
    ['19-14', '主持在研技术开发（攻关）课题完成人数（个）'],
    ['20-0', '教学名师人数'],
    ['20-1', '校内兼课人员总人数'],
    ['20-2', '具有专业技术职务人数'],
    ['20-3', '具有高校教师资格证书人数'],
    ['20-4', '专业带头人数'],
    ['20-5', '骨干教师人数'],
    ['20-6', '双师素质人数'],
    ['21-0', '本学年A类授课总学时'],
    ['21-1', '本学年B类授课总学时'],
    ['21-2', '本学年C类授课总学时'],
    ['21-3', '本学年总课程数'],
    ['21-4', '教师总人数'],
    ['21-5', '本学年授课总学时'],
    ['22-0', '培训进修时间（天）'],
    ['22-1', '挂职锻炼时间（天）'],
    ['22-2', '社会兼职时间（天）'],
    ['22-3', '主持获奖项目（包括行政性奖励）数'],
    ['22-4', '主持获奖技术专利（技术发明）项目数'],
    ['22-5', '主持在研教学改革课题到款额度（元）'],
    ['22-6', '公开出版著作与公开发表论文作者数'],
    ['22-7', '获技术专利（技术发明）项目数'],
    ['22-8', '主持在研教学改革课题完成人数'],
    ['22-9', '主持在研课题到款额度（元）'],
    ['22-10', '主持在研课题完成人数（个）'],
    ['22-11', '主持在研课题数（个）'],
    ['22-12', '主持在研横向课题数（个）'],
    ['22-13', '主持在研技术开发（攻关）课题到款额度（元）'],
    ['22-14', '主持在研技术开发（攻关）课题完成人数（个）'],
    ['23-0', '教师进修时间（天）'],
    ['23-1', '具有专业技术职务人数'],
    ['23-2', '具有职业资格证书人数'],
    ['23-3', '签约人数'],
    ['23-4', '校外兼职教师总人数'],
    ['24-0', '本学年A类授课总学时'],
    ['24-1', '本学年B类授课总学时'],
    ['24-2', '本学年C类授课总学时'],
    ['24-3', '本学年总课程数'],
    ['24-4', '教师总人数'],
    ['24-5', '本学年授课总学时'],
    ['25-0', '教学进修时间（天）'],
    ['25-1', '具有专业技术职务人数'],
    ['25-2', '具有职业资格证书人数'],
    ['25-3', '签约人数'],
    ['25-4', '校外兼课教师总数'],
    ['26-0', '教师总人数'],
    ['26-1', '本学年A类授课总学时'],
    ['26-2', '本学年B类授课总学时'],
    ['26-3', '本学年C类授课总学时'],
    ['26-4', '本学年总课程数'],
    ['26-5', '本学年授课总学时'],
    ['27-0', '当年招生专业数'],
    ['27-1', '普通高中起点人数'],
    ['27-2', '中职起点人数'],
    ['27-3', '其他起点人数'],
    ['27-4', '特色专业数'],
    ['27-5', '专业方向数'],
    ['27-6', '在校生一年级人数'],
    ['27-7', '在校生二年级人数'],
    ['27-8', '在校生三年级人数'],
    ['27-9', '专业带头人总数'],
    ['27-10', '专业负责人总数'],
    ['27-11', '专任专业负责人总数'],
    ['27-12', '当年招生专业及方向数'],
    ['27-13', '中职起点五年制后二年人数'],
    ['27-14', '班级总数'],
    ['27-15', '不分类班级数'],
    ['27-16', '生源类型班级数'],
    ['27-17', '学习能力班级数'],
    ['27-18', '定向培养班级数'],
    ['27-19', '其他类型班级数'],
    ['27-20', '专业总数'],
    ['27-21', '在校生数'],
    ['27-22', '计划招生数'],
    ['27-23', '报考数'],
    ['27-24', '实际录取数'],
    ['27-25', '第一志愿录取数'],
    ['27-26', '实际报到数'],
    ['27-27', '重点专业'],
    ['27-28', '专任的专业带头人数'],
    ['28-0', '专业数'],
    ['28-1', '课程数'],
    ['28-2', '教师数'],
    ['28-3', '专业方向数'],
    ['28-4', '教学计划规定课时数（学时）'],
    ['29-0', '毕业生获取率（%）'],
    ['29-1', '专业方向数'],
    ['29-2', '专业数'],
    ['29-3', '学生获取的符合专业面向职业资格证书种类数'],
    ['29-4', '毕业生获得证书数（本）'],
    ['29-5', '社会技术培训（人次）总数'],
    ['29-6', '社会技术培训（人次）获证数'],
    ['30-0', '专业方向数'],
    ['30-1', '专业数'],
    ['30-2', '顶岗实习毕业生总数（人）'],
    ['30-3', '企业录用顶岗实习毕业生数（人）'],
    ['30-4', '录用毕业生比例（%）'],
    ['30-5', '顶岗实习对口毕业生数（人）'],
    ['30-6', '顶岗实习对口率（%）'],
    ['30-7', '顶岗实习单位总数（个）'],
    ['30-8', '顶岗实习学生总数（人）'],
    ['30-9', '参加保险学生数（人）'],
    ['30-10', '毕业生总数（人）'],
    ['30-11', '实习人数'],
    ['31-0', '专业数'],
    ['31-1', '专业方向数'],
    ['31-2', '主要合作企业数'],
    ['31-3', '对学校准捐赠设备总值（万元）'],
    ['31-4', '对学校捐赠设备总值（万元）'],
    ['31-5', '合作企业数'],
    ['31-6', '年订单培养数（人）'],
    ['31-7', '年共同开发课程数（门）'],
    ['31-8', '年共同开发教材数（种）'],
    ['31-9', '年支持学校兼职教师数（人）'],
    ['31-10', '年接受顶岗实习学生数（人）'],
    ['31-11', '当年对学校（准）捐赠设备总值（万元）'],
    ['31-12', '年接受毕业生就业数（人）'],
    ['31-13', '学校为企业技术服务年收入（万元）'],
    ['31-14', '学校为企业年培训员工数（人次）'],
    ['32-0', '报到率（%）'],
    ['32-1', '录取数'],
    ['32-2', '9月1日毕业生数（人）'],
    ['32-3', '12月31日毕业生数（人）'],
    ['32-4', '12月31日就业数（人）'],
    ['32-5', '12月31日就业率（%）'],
    ['32-6', '专业方向数'],
    ['32-7', '录取率'],
    ['32-8', '实际报到情况-本地市人数（人）'],
    ['32-9', '实际报到情况-本地市比例（%）'],
    ['32-10', '实际报到情况-本省市人数（人）'],
    ['32-11', '实际报到情况-本省市比例（%）'],
    ['32-12', '实际报到情况-本区域人数（人）'],
    ['32-13', '实际报到情况-本区域比例（%）'],
    ['32-14', '报考本校原因-学校品牌人数（人）'],
    ['32-15', '报考本校原因-学校品牌比例（%）'],
    ['32-16', '报考本校原因-专业爱好人数（人）'],
    ['32-17', '报考本校原因-专业爱好比例（%）'],
    ['32-18', '报考本校原因-就业优势人数（人）'],
    ['32-19', '报考本校原因-就业优势比例（%）'],
    ['32-20', '报考本校原因-技能培养人数（人）'],
    ['32-21', '9月1日不同招生方式就业情况-省市统考就业率（%）'],
    ['32-22', '9月1日不同招生方式就业情况-自主招生毕业生数（人）'],
    ['32-23', '9月1日不同招生方式就业情况-自主招生就业数（人)'],
    ['32-24', '9月1日不同招生方式就业情况-自主招生就业率（%）'],
    ['32-25', '9月1日不同招生方式就业情况-直升入学毕业生数（人）'],
    ['32-26', '9月1日不同招生方式就业情况-直升入学就业数（人）'],
    ['32-27', '9月1日不同招生方式就业情况-直升入学就业率（%）'],
    ['32-28', '9月1日不同招生方式就业情况-单独招生毕业生数（人）'],
    ['32-29', '9月1日不同招生方式就业情况-单独招生就业数（人）'],
    ['32-30', '9月1日不同招生方式就业情况-单独招生就业率（%）'],
    ['32-31', '9月1日不同招生方式就业情况-中职推优毕业生数（人）'],
    ['32-32', '9月1日不同招生方式就业情况-中职推优就业数（人）'],
    ['32-33', '9月1日不同招生方式就业情况-中职推优就业率（%）'],
    ['32-34', '9月1日不同招生方式就业情况-其他毕业生数（人）'],
    ['32-35', '9月1日不同招生方式就业情况-其他就业数（人）'],
    ['32-36', '9月1日不同招生方式就业情况-其他就业率（%）'],
    ['32-37', '12月31日就业情况-升迁人数（人）'],
    ['32-38', '12月31日就业情况-升迁率（%）'],
    ['32-39', '12月31日就业情况-转岗人数（人）'],
    ['32-40', '12月31日就业情况-转岗率（%）'],
    ['32-41', '12月31日毕业生用人单位满意情况-满意或基本满意人数（人）'],
    ['32-42', '12月31日毕业生用人单位满意情况-满意或基本满意比例（%）'],
    ['32-43', '12月31日毕业生用人单位满意情况-一般满意人数（人）'],
    ['32-44', '12月31日毕业生用人单位满意情况-一般满意比例（%）'],
    ['32-45', '12月31日毕业生用人单位满意情况-不满意人数（人）'],
    ['32-46', '12月31日毕业生用人单位满意情况-不满意比例（%）'],
    ['32-47', '专业数'],
    ['32-48', '招生数（人）'],
    ['32-49', '报到数（人）'],
    ['32-50', '毕业生数（人）'],
    ['32-51', '9月1日就业数（人）'],
    ['32-52', '9月1日就业率（%）'],
    ['32-53', '报考本校原因-技能培养比例（%）'],
    ['32-54', '报考本校原因-地理位置人数（人）'],
    ['32-55', '报考本校原因-地理位置比例（%）'],
    ['32-56', '报考本校原因-他人推荐人数（人）'],
    ['32-57', '报考本校原因-他人推荐比例（%）'],
    ['32-58', '报考本校原因-其他人数（人）'],
    ['32-59', '报考本校原因-其他比例（%）'],
    ['32-60', '9月1日就业情况-本地市人数（人）'],
    ['32-61', '9月1日就业情况-本地市比例（%）'],
    ['32-62', '9月1日就业情况-本省市人数（人）'],
    ['32-63', '9月1日就业情况-本省市比例（%）'],
    ['32-64', '9月1日就业情况-本区域人数（人）'],
    ['32-65', '9月1日就业情况-本区域比例（%）'],
    ['32-66', '9月1日就业情况-其他人数（人）'],
    ['32-67', '9月1日就业情况-其他比例（%）'],
    ['32-68', '9月1日对口就业情况-就业数（人）'],
    ['32-69', '9月1日对口就业情况-对口率（%）'],
    ['32-70', '9月1日不同生源就业情况-普通高中生毕业生数（人）'],
    ['32-71', '9月1日不同生源就业情况-普通高中生就业数（人）'],
    ['32-72', '9月1日不同生源就业情况-普通高中生就业率（%）'],
    ['32-73', '9月1日不同生源就业情况-三校生单招毕业生数（人）'],
    ['32-74', '9月1日不同生源就业情况-三校生单招就业数（人）'],
    ['32-75', '9月1日不同生源就业情况-三校生单招就业率（%）'],
    ['32-76', '9月1日不同生源就业情况-“3+2”招生毕业生数（人）'],
    ['32-77', '9月1日不同生源就业情况-“3+2”招生就业数（人）'],
    ['32-78', '9月1日不同生源就业情况-“3+2”招生就业率（%）'],
    ['32-79', '9月1日不同生源就业情况-五年制高职毕业生数（人）'],
    ['32-80', '9月1日不同生源就业情况-五年制高职就业数（人）'],
    ['32-81', '9月1日不同生源就业情况-五年制高职就业率（%）'],
    ['32-82', '9月1日不同招生方式就业情况-全国统考毕业生数（人）'],
    ['32-83', '9月1日不同招生方式就业情况-全国统考就业数（人）'],
    ['32-84', '9月1日不同招生方式就业情况-全国统考就业率（%）'],
    ['32-85', '9月1日不同招生方式就业情况-省市统考毕业生数（人）'],
    ['32-86', '9月1日不同招生方式就业情况-省市统考就业数（人）'],
    ['32-87', '9月1日不同招生方式就业情况-对口招生毕业生数（人）'],
    ['32-88', '9月1日不同招生方式就业情况-对口招生就业数（人）'],
    ['32-89', '9月1日不同招生方式就业情况-对口招生就业率（%）'],
    ['33-0', '新增文件数'],
    ['33-1', '文件总数'],
    ['34-0', '在编人数'],
    ['34-1', '大学及以上学历人数'],
    ['34-2', '人员总数'],
    ['35-0', '专职政治辅导员人数'],
    ['35-1', '专职心理咨询师人数'],
    ['35-2', '在编人数'],
    ['35-3', '大学及以上学历人数'],
    ['35-4', '人员总数'],
    ['36-0', '在编人数'],
    ['36-1', '大学及以上学历人数'],
    ['36-2', '人员总数'],
    ['37-0', '周工作时数（小时）'],
    ['37-1', '大学及以上学历人数'],
    ['37-2', '人员总数'],
    ['38-0', '在编人数'],
    ['38-1', '大学及以上学历人数'],
    ['38-2', '人员总数'],
    ['39-0', '奖助人数'],
    ['39-1', '奖助金额（万元）'],
    ['39-2', '项目总数'],
    ['40-0', '计划招生数（人）'],
    ['40-1', '实际录取数（人）'],
    ['40-2', '实际报到数（人）'],
    ['40-3', '新生报到率（%）'],
    ['40-4', '实际录取率（%）'],
    ['41-0', '12月31日就业率（%）'],
    ['41-1', '9月1日毕业生数（人）'],
    ['41-2', '9月1日就业数（人）'],
    ['41-3', '9月1日就业率（%）'],
    ['41-4', '12月31日毕业生数（人）'],
    ['41-5', '12月31日就业数（人）'],
    ['42-0', '捐赠单位数'],
    ['42-1', '捐赠价值（万元）'],
    ['43-0', '应届毕业生主要就业单位数'],
    ['44-0', '毕业生总数（人）'],
    ['44-1', '专业数'],
    ['44-2', '专业方向数'],
    ['44-3', '班级数'],
    ['45-0', '项目总数'],
    ['46-0', '项目总数'],
    ['46-1', '学生项目总数'],
    ['46-2', '学校获奖项目总数'],
    ['46-3', '学生社团、红十字会获奖社团数'],
    ['46-4', '学生社团、红十字会获奖项目总数'],
    ['47-0', '专业数'],
    ['47-1', '专业方向数'],
    ['47-2', '班级数'],
    ['47-3', '学生数'],
    ['48-0', '社团数'],
    ['48-1', '活动经费（元）'],
    ['49-0', '学校分管部门数'],
    ['49-1', '社团数'],
    ['49-2', '培训总数（人次）'],
    ['49-3', '培训获得证书数（本）'],
    ['50-0', '学生数'],
    ['50-1', '班级数'],
])
const schoolColumns = [
    {
        title: '指标项',
        dataIndex: 'key',
    },
    {
        title: '基本信息',
        dataIndex: 'id1',
    },
    {
        title: '院校领导',
        dataIndex: 'id2',
    },
    {
        title: '基本办学条件',
        dataIndex: 'id3',
    },
    {
        title: '实践教学条件',
        dataIndex: 'id4',
    },
    {
        title: '办学经费',
        dataIndex: 'id5',
    },
    {
        title: '师资队伍',
        dataIndex: 'id6',
    },
    {
        title: '专业',
        dataIndex: 'id7',
    },
    {
        title: '教学管理与教学研究',
        dataIndex: 'id8',
    },
    {
        title: '社会评价',
        dataIndex: 'id9',
    },
    {
        title: '学生信息（扩展）',
        dataIndex: 'id10',
    }
]
const schoolArr = ['基本信息', '院校领导', '基本办学条件', '实践教学条件', '办学经费', '师资队伍', '专业', '教学管理与教学研究', '社会评价', '学生信息（扩展）']
const schoolTableArr = ['历史反复升降的指标', '历史累计增长较大的指标', '历史累计增长较小的指标', '历史持续增长的指标', '历史持续下降的指标']
export {
    typeList,
    titleArr,
    dnzsArr,
    schoolArr,
    schoolColumns,
    schoolTableArr
}