const characterIntro = {
	xunshu: "荀淑（83年～149年），字季和，为郎陵侯相，颍川颍阴人（今河南省许昌市）人。汉和帝至汉桓帝时人物，以品行高洁著称。有子八人，号八龙。年轻时有高尚的德行，学问渊博，不喜欢雕章琢句，徒在文字上用功，不注重实际的学识。因此，常常被俗儒看不起。但州里却称他有知人之明。安帝时，征召任为郎中，后来再升当涂长。离职还乡里。他的孙子荀彧是曹操部下著名的谋士。",
	xuncai: "荀采（生卒年不详），字女荀，颍川人，东汉名士荀爽之女。荀采聪慧敏捷而有才艺。十七岁时，荀采嫁给阴瑜。两年后阴瑜去世。荀采不愿意改嫁，但荀爽答应把荀采嫁给同郡人郭奕。荀采趁着旁人没有防备，用粉在门上写下：“尸还阴”，而后自缢而死。",
	xuncan: "荀粲（210年—238年），字奉倩，颍川郡颍阴县（今河南省许昌市）人。三国时期曹魏大臣、玄学家，太尉荀彧幼子。个性简贵，不轻易交接常人，所交之辈皆一时俊杰。聪颖过人，善谈玄理，名噪一时。娶大将军曹洪之女为妻，生活美满。景初二年，面对妻子去世，悲痛过度而死，时年二十九，成语“荀令伤神”与之有关。",
	hanshao: "韩韶（生卒年不详），字仲黄，颍川舞阳（今河南省漯河市）人，东汉桓帝时出仕。任郡吏，有政绩，继而被征入司徒府。他公正廉明，尽心民事，视民苦如在己身，政绩卓著。汉永寿二年（公元156年），泰山贼公孙举率流寇数千骚扰嬴县，守令因不能拒敌安民，多受制裁，朝廷命尚书府从三府（司徒、司马、司空）属员中，选择能治理民事，又能拒寇入侵的官员，前往镇守。韩韶被封为“嬴长”到嬴县上任，他是莱芜历史上唯一的一位“嬴长”。",
	hanrong: "韩融（127年～196年），字元长，颍川舞阳（今属河南省漯河市）人。赢长韩韶子，献帝时大臣。中平五年（188年），融与荀爽、陈纪等十四人并博士征，不至。董卓废立，融等复俱公车征。初平元年（190年）六月，融为大鸿胪，奉命与执金吾胡母班等出使关东。献帝东迁，为李傕、郭汜等所败，融为太仆，奉命至弘农与傕、汜连和，使其放遣公卿百官及宫女妇人。",
	wukuang: "吴匡（生卒年不详），兖州陈留（今河南开封市）人。东汉末年大臣，大将军何进部将。光熹元年（公元189年），汉灵帝死后，十常侍干预朝政，大将军何进谋诛宦官，但失败被杀，吴匡联合曹操、袁绍等杀尽宦官，攻杀车骑将军何苗。兴平二年（公元195年）十月，李傕、郭汜后悔放汉献帝东归洛阳，于是联合起来追击，曹操遂起兵平乱，但在回朝后，曹操挟天子以令诸侯，实行专权，但遭到吴匡反对。",
	wanghun: "王浑（223年～297年），字玄冲，太原郡晋阳县（今山西省太原市）人。魏晋时期名臣，曹魏司空王昶的儿子。王浑早年为大将军曹爽的掾吏，高平陵政变后，循例免官，出任怀县县令、散骑侍郎等职，袭封京陵县侯。西晋王朝建立后，加号扬烈将军，历任征虏将军、东中郎将、豫州刺史等职，积极筹划伐吴方略。咸宁五年（279年），配合镇南将军杜预灭亡吴国，迁征东大将军、左仆射、司徒公，晋爵京陵县公。晋惠帝司马衷即位，加任侍中衔。楚王司马玮发动政变，有意寻求支持，遭到严词拒绝。楚王司马玮死后，复任司徒、录尚书事。元康七年（297年），王浑去世，享年七十五岁，谥号为元。《唐会要》尊为“魏晋八君子”之一。",
	zhongyu: "钟毓（？-263年），字稚叔，颍川长社（今河南长葛市）人。三国时期魏国大臣，太傅钟繇之子、司徒钟会之兄。出身颍川钟氏，机灵敏捷，有其父之遗风。十四岁时，起家散骑侍郎。太和初年，迁黄门侍郎，袭封定陵县侯。正始年间，拜散骑常侍，迁魏郡太守，入为侍中、御史中丞、廷尉 [5] 。随平诸葛诞的淮南叛乱，拜青州刺史、后将军，都督徐州、荆州诸军事。景元四年（263年），去世，追赠车骑将军，谥号为惠，著有文集五卷（见《隋书·经籍志》及《两唐书·经籍志》），传于世。",
	wanglun: "王沦（233年－257年）字太冲，出身太原晋阳王姓世族（今山西省太原市），王昶三子，王浑、王深之弟，王湛之兄。醇粹简远，崇尚老庄之学，心思平淡。二十多时被举荐为孝廉，没有前往，后任大将军参军。257年，诸葛诞不满司马氏篡权而在寿春起义，王沦跟随司马昭征讨，遭遇疾疫去世，时年二十五，时人惜之，司马昭为他流泪。其兄著诔文《表德论》，表述其德行，说“因为畏惧帝王的典章制度，不能写墓志铭，于是撰写过往的事迹，刻在墓的背面。”",
	wuqiao: "吴乔，西晋人物，蜀车骑将军吴懿之孙。李雄建立成汉政权，他沦落益州，长达三十年，始终不向李雄屈服。",
	clan_wangguang: "王广，三国时期曹魏太原祁县人，哲学家。东汉司徒王允从孙，魏太尉王凌之子。有志尚学，官至尚书。魏时随父亲在朝作官，屯骑校尉，机智有谋。当得知司马懿篡夺曹魏政权时，王凌与外甥令狐愚合谋立楚王为魏主，王广劝其父不可，王凌没有接受儿子的谏言，结果计谋泄而被害。",
	wangmingshan: "王明山，王凌的小儿子，太原祁（今山西省祁县）人，三国魏书法家，最知名善画，多技艺，人得其书，皆以为法。太尉王凌参与谋划废立，事情泄露，被太傅司马懿领兵平定。",
};

export default characterIntro;
