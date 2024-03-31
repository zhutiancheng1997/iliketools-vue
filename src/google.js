var emailTemplateConfig = {
    '游戏开发工程师':{
        '笔试':{

        },
        'HR面试':{

        },
        '专业面试':{

        }
    }
}

function getEmailHtml(position,interviewTyp,receiver, sex, interviewDateTimeStr, interviewAddress){
    position = position.toUpperCase();

    var answerDateTime = new Date(interviewTime); answerDateTime.setHours(answerDateTime.getHours()-24);
    var answerDateTimeStr = getDateTimeFormat(answerDateTime);


    var gameDevBiShiContent=`<div role="listitem" aria-expanded="true" style="clear: both; padding-bottom: 0px; max-width: 100000px; outline: none;"><div class="adM"></div><span style="font-family: Arial, Helvetica, sans-serif; font-size: small;">尊敬的${receiver}${sex}：</span><div style="font-family: Arial, Helvetica, sans-serif; font-size: small;">    您好，非常高兴地通知您，经过我们的筛选和职位意向沟通确认，    诚挚邀请您参加笔试！具体事宜如下：<br>职位：游戏开发工程师<br>时间：<b>${interviewDateTimeStr}</b><br>笔试地址：<b>${interviewAddress}</b><br> 联系人：黄女士<br>联系电话：0755-86367337、13662376462<br><div><br>风林火山职位面试通关流程：<span style="background-color: transparent;">岗位招聘我们是认真负责的，</span><span style="background-color: transparent;">期待您对职位发展有更清晰的判断和计划，全流程完成时间预计3~</span><span style="background-color: transparent;">4周：</span></div><div><span style="background-color: transparent;"><br></span></div><div>     关卡1—笔试：游戏开发工程师笔试题侧重工作场景开放式考量，完<wbr>成时间90分钟。<br><br>关卡2—HR面试：HR面试更偏重行为面试和应变性问题。     目的是加深双方的了解，我们希望您真诚地表达自己，     切勿为了所谓“标准答案”违背自己的内心想法。<br><br>关卡3—专业面试：您将在这一轮面试加深对公司发展方向、     岗位职责、工作流程等了解。<br><br>关卡4—综合测试题：模拟项目，     通过项目实际成果和完成质量考察您的专业能力。     综合测试是整个招聘流程中最重要的一项，     关系到您是否可以加入我们，所以请务必认真对待哦！<br><br>关卡5—大Boss综合面试：公司CEO和您的最终面谈，     如果通关，加入我们一起把组织发展做到极致吧！<br><br>企业介绍（<a href="https://www.fenglgo.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710681439515000&amp;usg=AOvVaw3pqPPpz3EqOKr7HWO03tzs">https://www.fenglgo.com/</a>）     ：</div><div>     其疾如风、其徐如林、侵掠如火、不动如山——风林火山，源于《     孙子兵法》。     深圳市风林火山电脑技术有限公司于1996年8月成立，     是国家高新技术企业，     也是深圳软件园首批入驻的优秀企业和新一代互联网产业园首批入驻     企业。我们专注于互联网在线棋牌类游戏，集研发、运营为一体。<div>      作为一家互联网游戏公司，我们认真对待每一个候选人，      选拔真正优秀的人才，我们的工作极具挑战性，      但同时会给您带来很大的成长。我们期待您聪明爱思考，热爱工作，      注重效率。响应式组织的团队管理理念，      期待有职业追求的您加入我们。</div><div><br>我们的产品<br><ol><li style="margin-left: 15px;">已上线游戏18款，同时提供移动端及PC端服务。（可登陆产品官<wbr>网了解详情，“黄金岛”为公司产品运营平台，旗下所有产品均为自<wbr>主研发）。</li><li style="margin-left: 15px;">公司游戏注册用户7000万以上，接近100,000在线玩家同<wbr>时竞技。</li><li style="margin-left: 15px;">公司营收平稳增长，近十年利润保持稳定上升。&nbsp;</li></ol>我们的团队<br><ol><li style="margin-left: 15px;">技术团队沉淀十余年，985/211院校比例大于60%。</li><li style="margin-left: 15px;">良好的晋升机制，员工平均任职年限超过3年，稳定性好。</li><li style="margin-left: 15px;">关注新员工培养计划，完善的导师制，并为导师提供丰厚激励机制。</li><li style="margin-left: 15px;">注重效率，团队每月加班率少于4%，四点半下班。</li></ol>我们的技术<br><ol><li style="margin-left: 15px;">全3D场景游戏开发，打造最华丽的棋牌游戏。</li><li style="margin-left: 15px;">客户端技术范围涵盖引擎架构、编辑器插件开发、游戏视觉开发、业<wbr>务逻辑开发等。</li><li style="margin-left: 15px;">服务器使用Clojure语言开发，挑战精简优雅的极致。</li><li style="margin-left: 15px;">敏捷团队管理，体验飞一般的开发感。</li></ol>我们的福利<br><ol><li style="margin-left: 15px;">提供良好的办公体验，为所有员工配备Mac电脑和独立健身房。</li><li style="margin-left: 15px;">每日提供员工午餐。</li><li style="margin-left: 15px;">每月组织团建活动，每年两次团体马拉松活动，带您游遍全国山水。</li><li style="margin-left: 15px;">零食饮料无限量供应，水果，下午茶这些都是必须的。</li><li style="margin-left: 15px;">项目绩效季度回报，让员工享受公司经营成果。</li><li style="margin-left: 15px;">季度加薪评估机制。</li><li style="margin-left: 15px;">六险一金，婚育礼金，节日礼金、生日礼品、年度体检。</li></ol><div>       了解更多关于我司企业文化及招聘信息，       请扫描下方二维码关注风林火山公司公众号。</div><div><img alt="image.jpg" width="250" height="260"><br></div><div>       如有任何疑问，可直接回复或发送至邮箱：<a href="mailto:huangwanying@basecity.com" target="_blank">huangwanying@basecity.com</a></div></div><div><br></div><div>      --<br></div><div>      深圳市风林火山电脑技术有限公司</div><div><br>综合管理部：黄婉滢</div><div><br>公司网址：<a href="https://www.fenglgo.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710681439515000&amp;usg=AOvVaw3pqPPpz3EqOKr7HWO03tzs">https://www.fenglgo.com/</a></div><div><br>电子邮件：<a href="mailto:huangwanying@basecity.com" target="_blank">huangwanying@basecity.com</a></div><div><br>联系电话/公司传真：0755-86367337&nbsp;&nbsp;</div><div><br>公司地址：深圳市南山区科技园南十二道长虹科技大厦1404-      1408室</div><div><br>愉快工作、共创快乐游戏家园！</div><div class="yj6qo"></div><div class="adL"></div></div><div class="adL"></div></div><div class="adL"></div></div>`;
    var gameDevZhuanYeMianShiContent=`<div id=":2g8" class="a3s aiL "><div class="adM"></div><div dir="ltr">   尊敬的${receiver}${sex}：<div>    您好。经过我们的筛选和职位意向沟通确认，    诚挚邀请您来参加专业面试！具体事宜如下：</div>职位：游戏开发工程师<br>时间：${interviewDateTimeStr}<br>地址：${interviewAddress}<br>联系电话：0755-86367337、13662376462<div><br></div><div>    非常感谢您接受我们公司的面试邀请，    以下是一些在专业面试环节的建议，希望能够帮助您更好地准备<span>面试</span>：<ol><li style="margin-left:15px">准备过往项目经历及所获成就。除了列举项目经验和技术架构之外，<wbr>也可以进一步展开讲解自己在项目中遇到的问题和挑战，以及如何解<wbr>决它们。此外，可以考虑提供一些实际案例，说明自己在解决问题时<wbr>的思路和方法，并且突出自己的技术贡献和成就。</li><li style="margin-left:15px">准备技术问题。除了选择与自己熟悉的语言相关问题，也可以考虑一<wbr>些涉及Clojure、软件架构、性能优化、网络安全等方面的问<wbr>题。此外，可以考虑一些与当前技术热点和趋势相关的问题，<wbr>例如云计算、大数据、人工智能等。在准备问题的过程中，需要注意<wbr>问题的针对性和难度，以便更好地展现自己的技术水平和思维能力。</li><li style="margin-left:15px">积极发问。除了回答<span>面试</span>官提出的问题之外，还可以向<span>面试</span>官了解公<wbr>司的未来规划和技术发展方向，以便更好地了解公司的需求和自己的<wbr>发展空间。此外，还可以向<span>面试</span>官请教一些技术问题，以便更深入地<wbr>了解公司的业务和技术。</li><li style="margin-left:15px">与<span>面试</span>官建立良好的沟通和互动。在<span>面试</span>中，除了展示自己的技术能<wbr>力之外，还需要与<span>面试</span>官建立良好的沟通和互动，以便更好地了解<span>面<wbr>试</span>官的需求和公司的文化。可以通过积极回答问题、主动提问、展示<wbr>自己的思维方式和工作风格等方式，展现自己的优势和能力，并且在<span><wbr>面试</span>中保持自信和从容，确信自己准备充分。</li></ol><p>希望以上建议能够帮助您更好地准备<span>面试</span>，并在<span>面试</span>中脱颖而出。祝<wbr>您<span>面试</span>成功！<br><br></p></div></div><div><br></div><div>      --<br></div><div>      深圳市风林火山电脑技术有限公司</div><div><br>综合管理部：黄婉滢</div><div><br>公司网址：<a href="https://www.fenglgo.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710681439519000&amp;usg=AOvVaw3L6fH1mOkasf8ZhrtxT0zt">https://www.fenglgo.com/</a></div><div><br>电子邮件：<a href="mailto:huangwanying@basecity.com" target="_blank">huangwanying@basecity.com</a></div><div><br>联系电话/公司传真：0755-86367337&nbsp;&nbsp;</div><div><br>公司地址：深圳市南山区科技园南十二道长虹科技大厦1404-      1408室</div><div><br>愉快工作、共创快乐游戏家园！</div><div class="yj6qo"></div><div class="adL"></div></div>`;
    var gameUserBiShiContet = `<div id=":15z" class="a3s aiL "><div dir="ltr"><div dir="ltr">尊敬的<b>${receiver}${sex}</b>：<div>您好，非常高兴地通知您，经过我们的筛选和职位意向沟通确认，<wbr>诚挚邀请您参加笔试！具体事宜如下：<br>职位：游戏用户工程师<br>时间：<b>${interviewDateTimeStr}</b><br>地址：深圳市南山区高新南一道长虹科技大厦1404-<wbr>1408室【附近地铁站：高新园D出口；附近公交站：大冲】<br>联系人：黄小姐<br>联系电话：0755-86367337、13662376462<br><div><br>风林火山职位面试通关流程：<span style="background-color:transparent">岗位招聘我们是认真负责的，</span><span style="background-color:transparent">期待您对<wbr>职位发展有更清晰的判断和计划，全流程完成时间预计3~</span><span style="background-color:transparent">4周：</span></div><div><span style="background-color:transparent"><br></span></div><div>关卡1—笔试：游戏用户工程师笔试题侧重工作场景开放式考量，<wbr>完成时间60分钟。<br><br>关卡2—HR面试：HR面试更偏重行为面试和应变性问题。<wbr>目的是加深双方的了解，我们希望您真诚地表达自己，<wbr>切勿为了所谓“标准答案”违背自己的内心想法。<br><br>关卡3—专业面试：您将在这一轮面试加深对公司发展方向、<wbr>岗位职责、工作流程等了解。<br><br>关卡4—综合测试题：模拟项目，<wbr>通过项目实际成果和完成质量考察您的专业能力。<wbr>综合测试是整个招聘流程中最重要的一项，<wbr>关系到您是否可以加入我们，所以请务必认真对待哦！<br><br>关卡5—大Boss综合面试：公司CEO和您的最终面谈，<wbr>如果通关，加入我们一起把组织发展做到极致吧！<br><br>企业介绍（<a href="https://www.fenglgo.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710685049065000&amp;usg=AOvVaw3yE4XW8rZ0GWvlqsvBk39G">https://www.fenglgo.com/</a>）<wbr>：</div><div>其疾如风、其徐如林、侵掠如火、不动如山——风林火山，源于《<wbr>孙子兵法》。<wbr>深圳市风林火山电脑技术有限公司于1996年8月成立，<wbr>是国家高新技术企业，<wbr>也是深圳软件园首批入驻的优秀企业和新一代互联网产业园首批入驻<wbr>企业。我们专注于互联网在线棋牌类游戏，集研发、运营为一体。<div>作为一家互联网游戏公司，我们认真对待每一个候选人，<wbr>选拔真正优秀的人才，我们的工作极具挑战性，<wbr>但同时会给您带来很大的成长。我们期待您聪明爱思考，热爱工作，<wbr>注重效率。响应式组织的团队管理理念，<wbr>期待有职业追求的您加入我们。</div><div><br>我们的产品<br><ol><li style="margin-left:15px">已上线游戏18款，同时提供移动端及PC端服务。（<wbr>可登陆产品官网了解详情，“黄金岛”为公司产品运营平台，<wbr>旗下所有产品均为自主研发）。</li><li style="margin-left:15px">公司游戏注册用户7000万以上，接近100,<wbr>000在线玩家同时竞技。</li><li style="margin-left:15px">公司营收平稳增长，近十年利润保持稳定上升。&nbsp;</li></ol>我们的团队<br><ol><li style="margin-left:15px">技术团队沉淀十余年，985/211院校比例大于60%。</li><li style="margin-left:15px">良好的晋升机制，员工平均任职年限超过3年，稳定性好。</li><li style="margin-left:15px">关注新员工培养计划，完善的导师制，并为导师提供丰厚激励机制。</li><li style="margin-left:15px">注重效率，团队每月加班率少于4%，四点半下班。</li></ol>我们的技术<br><ol><li style="margin-left:15px">全3D场景游戏开发，打造最华丽的棋牌游戏。</li><li style="margin-left:15px">客户端技术范围涵盖引擎架构、编辑器插件开发、游戏视觉开发、<wbr>业务逻辑开发等。</li><li style="margin-left:15px">服务器使用Clojure语言开发，挑战精简优雅的极致。</li><li style="margin-left:15px">敏捷团队管理，体验飞一般的开发感。</li></ol>我们的福利<br><ol><li style="margin-left:15px">提供良好的办公体验，为所有员工配备Mac电脑和独立健身房。</li><li style="margin-left:15px">每日提供员工午餐。</li><li style="margin-left:15px">每月组织团建活动，每年两次团体马拉松活动，带您游遍全国山水。</li><li style="margin-left:15px">零食饮料无限量供应，水果，下午茶这些都是必须的。</li><li style="margin-left:15px">项目绩效季度回报，让员工享受公司经营成果。</li><li style="margin-left:15px">季度加薪评估机制。</li><li style="margin-left:15px">六险一金，婚育礼金，节日礼金、生日礼品、年度体检。</li></ol><div>了解更多关于我司企业文化及招聘信息，<wbr>请扫描下放二维码关注风林火山公司公众号。</div><div><img src="https://mail.google.com/mail/u/0?ui=2&amp;ik=80fd3a0a05&amp;attid=0.1&amp;permmsgid=msg-a:r8950688085371765073&amp;th=18e479fd1eed150c&amp;view=fimg&amp;fur=ip&amp;sz=s0-l75-ft&amp;attbid=ANGjdJ9_hMBuABjFK2HmRkWz68edF20xY_hBHj3Jl7vpXQqUpVwyRzJXMiUEQ026jSF7Ck7ciDIs8khtT_mxBZJ3ZSL0aLusVUEzbFGNs9vj4m1xvJeLXk4bQ4Vu8ns&amp;disp=emb&amp;realattid=ii_18e479ebff8cb971f161" alt="image.png" width="258" height="258" data-image-whitelisted="" class="CToWUd" data-bit="iit"><br></div><div>如有任何疑问，可直接回复或发送至邮箱：<a href="mailto:huangwanying@basecity.com" target="_blank">huangwanyin<wbr>g@basecity.com</a></div></div><div><br></div></div></div></div><div><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><span><div><br>--</div><div>深圳市风林火山电脑技术有限公司</div><div><br></div><div>综合管理部：黄婉滢</div><div><br></div><div>公司网址：<a href="https://www.fenglgo.com/" style="color:rgb(17,85,204)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710685049065000&amp;usg=AOvVaw3yE4XW8rZ0GWvlqsvBk39G">https://www.fenglgo.com/</a><br></div><div><br></div></span><div style="color:rgb(34,34,34)">电子邮件：<a href="mailto:huangwanying@basecity.com" style="color:rgb(17,85,204)" target="_blank">huangwanying@basecity.com</a></div><span><div><br></div><div><div>联系电话：0755－86367337&nbsp; &nbsp; &nbsp;&nbsp;公司传真：0755－86367337 &nbsp; &nbsp; 邮编：518057<br></div><font face="arial, helvetica, sans-serif" color="#0000ff"><div><span style="color:rgb(34,34,34);font-family:arial,sans-serif"><br></span></div><div><span style="color:rgb(34,34,34);font-family:arial,sans-serif">公司地址：<wbr>深圳市南山区科技园科技南十二道长虹科技大厦1404室－<wbr>1408室<br><br></span><span style="color:rgb(34,34,34);font-family:Arial,Helvetica,sans-serif">愉快工作、共创快乐游戏家园。</span><span style="color:rgb(34,34,34);font-family:arial,sans-serif"><br></span></div></font></div></span></div></div></div></div><div class="yj6qo"></div><div class="adL"></div></div>`;
    var gameUserZhuanYeMianShiContet = `<div id=":19c" class="a3s aiL "><div dir="ltr"><div dir="ltr">尊敬的<b>${receiver}${sex}</b>：<div>您好。经过我们的筛选和职位意向沟通确认，<wbr>诚挚邀请您来参加专业面试！具体事宜如下：</div>职位：<b>综合管理专员/游戏用户工程师</b><br>时间：<b>${interviewDateTimeStr}</b><br>地址：深圳市南山区高新南一道长虹科技大厦1404-<wbr>1408室【附近地铁站：高新园D出口；附近公交站：大冲】<br>联系人：黄小姐<br>联系电话：0755-86367337、13662376462<div><br></div><div>非常感谢您接受我们公司的面试邀请，<wbr>以下是一些在专业面试环节的建议，<wbr>希望能够帮助您更好地准备面试：<ol><li style="margin-left:15px">深入了解我们公司产品，展现自己的热情和兴趣。</li><li style="margin-left:15px">根据投递的岗位所在部门的工作职责，准备相关知识。</li><li style="margin-left:15px">与面试官建立良好的沟通和互动，充分展示您的优势和能力。</li><li style="margin-left:15px">在面试中保持自信和从容，确信自己准备充分。</li></ol><p>希望以上建议能够帮助您更好地准备面试，并在面试中脱颖而出。<wbr>祝您面试成功！<br></p></div></div><div><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><span><div><br><br>--</div><div>深圳市风林火山电脑技术有限公司</div><div><br></div><div>综合管理部：黄婉滢</div><div><br></div><div>公司网址：<a href="https://www.fenglgo.com/" style="color:rgb(17,85,204)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710685839633000&amp;usg=AOvVaw0TSqKdY6YBKrfiQQae8MyP">https://www.fenglgo.com/</a><br></div><div><br></div></span><div style="color:rgb(34,34,34)">电子邮件：<a href="mailto:huangwanying@basecity.com" style="color:rgb(17,85,204)" target="_blank">huangwanying@basecity.com</a></div><span><div><br></div><div><div>联系电话：0755－86367337&nbsp; &nbsp; &nbsp;&nbsp;公司传真：0755－86367337 &nbsp; &nbsp; 邮编：518057<br></div><font face="arial, helvetica, sans-serif" color="#0000ff"><div><span style="color:rgb(34,34,34);font-family:arial,sans-serif"><br></span></div><div><span style="color:rgb(34,34,34);font-family:arial,sans-serif">公司地址：<wbr>深圳市南山区科技园科技南十二道长虹科技大厦1404室－<wbr>1408室<br><br></span><span style="color:rgb(34,34,34);font-family:Arial,Helvetica,sans-serif">愉快工作、共创快乐游戏家园。</span><span style="color:rgb(34,34,34);font-family:arial,sans-serif"><br></span></div></font></div></span></div></div></div></div><div class="yj6qo"></div><div class="adL"></div></div>`;
    var gameDesignOfflineCeShiContent = `<div id=":37l" class="a3s aiL "><div dir="ltr"><div dir="ltr">尊敬的${receiver}${sex}：&nbsp;</div><div dir="ltr"><br><div>您好，非常高兴地通知您，经过我们的职位意向的沟通和确认，<wbr>诚挚邀请您参加游戏3D设计师岗位测试！<wbr>届时我们会按照约定向您发送测试题目。具体事宜如下：<br><br>职位：游戏设计师</div><div>时间：${interviewDateTimeStr}</div><div>联系人：黄女士<br>地址：<span style="font-size:10pt;font-family:Arial;text-align:center">深圳市南山区高新南一道长虹科技大厦1404-<wbr>1408室【附近地铁站：高新园D出口；附近公交站：大冲】</span><br>联系电话：0755-86367337、13662376462<br><div><br>风林火山职位面试通关流程：<span style="background-color:transparent">岗位招聘我们是认真负责的，</span><span style="background-color:transparent">期待您对<wbr>职位发展有更清晰的判断和计划，全流程完成时间预计2~</span><span style="background-color:transparent">3周：</span></div><div><span style="background-color:transparent"><br></span></div><div>关卡1—上机测试：<wbr>游戏设计师上机测试题侧重美术设计基础能力的考量，<wbr>完成时间120分钟。<br><br>关卡2—HR面试：HR面试则偏重行为面试和应变性问题。<wbr>目的是加深双方的了解，我们希望您真诚地表达自己，<wbr>切勿为了所谓“标准答案”违背自己的内心想法。<br><br>关卡3—综合测试题：模拟项目，<wbr>通过项目实际成果和完成质量考察您的专业能力。<wbr>综合测试是整个招聘流程中最重要的一项，<wbr>关系到您是否可以加入我们，请务必认真对待哦！<br><br>关卡4—大Boss综合面试：公司CEO和您的最终面谈，<wbr>如果通关，加入我们一起把游戏产品做到极致吧！<br><br>企业介绍（<a href="https://www.fenglgo.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710686169356000&amp;usg=AOvVaw1EZyG5GYyV2Mbs0pwr8a1c">https://www.fenglgo.com/</a>）<wbr>：</div><div>其疾如风、其徐如林、侵掠如火、不动如山——风林火山，源于《<wbr>孙子兵法》。<wbr>深圳市风林火山电脑技术有限公司于1996年8月成立，<wbr>是国家高新技术企业，<wbr>也是深圳软件园首批入驻的优秀企业和新一代互联网产业园首批入驻<wbr>企业。我们专注于互联网在线棋牌类游戏，集研发、运营为一体。<div>作为一家互联网游戏公司，我们认真对待每一个候选人，<wbr>选拔真正优秀的人才，我们的工作极具挑战性，<wbr>但同时会给您带来很大的成长。我们期待您聪明爱思考，热爱工作，<wbr>注重效率。响应式组织的团队管理理念，<wbr>期待有职业追求的您加入我们。</div><div><br>我们的产品<br><ol><li style="margin-left:15px">已上线游戏18款，同时提供移动端及PC端服务。（<wbr>可登陆产品官网了解详情，“黄金岛”为公司产品运营平台，<wbr>旗下所有产品均为自主研发）。</li><li style="margin-left:15px">公司游戏注册用户7000万以上，接近100,<wbr>000在线玩家同时竞技。</li><li style="margin-left:15px">公司营收平稳增长，近十年利润保持稳定上升。&nbsp;</li></ol>我们的团队<br><ol><li style="margin-left:15px">技术团队沉淀十余年，985/211院校比例大于60%。</li><li style="margin-left:15px">良好的晋升机制，员工平均任职年限超过3年，稳定性好。</li><li style="margin-left:15px">关注新员工培养计划，完善的导师制，并为导师提供丰厚激励机制。</li><li style="margin-left:15px">注重效率，团队每月加班率少于4%，四点半下班。</li></ol>我们的技术<br><ol><li style="margin-left:15px">全3D场景游戏开发，打造最华丽的棋牌游戏。</li><li style="margin-left:15px">客户端技术范围涵盖引擎架构、编辑器插件开发、游戏视觉开发、<wbr>业务逻辑开发等。</li><li style="margin-left:15px">服务器使用Clojure语言开发，挑战精简优雅的极致。</li><li style="margin-left:15px">敏捷团队管理，体验飞一般的开发感。</li></ol>我们的福利<br><ol><li style="margin-left:15px">提供良好的办公体验，为所有员工配备Mac电脑和独立健身房。</li><li style="margin-left:15px">每日提供员工午餐。</li><li style="margin-left:15px">每月组织团建活动，每年两次团体马拉松活动，带您游遍全国山水。</li><li style="margin-left:15px">零食饮料无限量供应，水果，下午茶这些都是必须的。</li><li style="margin-left:15px">项目绩效季度回报，让员工享受公司经营成果。</li><li style="margin-left:15px">季度加薪评估机制。</li><li style="margin-left:15px">六险一金，婚育礼金，节日礼金、生日礼品、年度体检。</li></ol><div>了解更多关于我司企业文化及招聘信息，<wbr>请扫描下放二维码关注风林火山公司公众号。</div><div><img src="https://mail.google.com/mail/u/0?ui=2&amp;ik=80fd3a0a05&amp;attid=0.1&amp;permmsgid=msg-a:r2860032723875381461&amp;th=18e47b0f1c658aeb&amp;view=fimg&amp;fur=ip&amp;sz=s0-l75-ft&amp;attbid=ANGjdJ_fgyMxZnPBMBUVjF04xOybh9OHrfzDngUR7udvxlO6dX1QtkAsYIr23kJcRL6pIVXFKGkvQFuHsztJSywefi9__r2AkIK6fGkg-v3FBRMM0y6omox5iXUnbDs&amp;disp=emb&amp;realattid=ii_18e12b121d3cb971f161" alt="image.png" width="258" height="258" data-image-whitelisted="" class="CToWUd" data-bit="iit"></div></div></div></div></div><div><div dir="ltr" class="gmail_signature"><div dir="ltr"><div><br><br>--</div><div>深圳市风林火山电脑技术有限公司</div><div><br></div><div>综合管理部：黄婉滢</div><div><br></div><div>公司网址：<a href="https://www.fenglgo.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710686169356000&amp;usg=AOvVaw1EZyG5GYyV2Mbs0pwr8a1c">https://www.fenglgo.com/</a><br></div><div><br></div><div>电子邮件：<a href="mailto:huangwanying@basecity.com" target="_blank">huangwanying@basecity.com</a></div><div><br></div><div><div>联系电话：0755－86367337&nbsp; &nbsp; &nbsp;&nbsp;公司传真：0755－86367337 &nbsp; &nbsp; 邮编：518057<br></div><font face="arial, helvetica, sans-serif" color="#0000ff"><div><span style="color:rgb(34,34,34);font-family:arial,sans-serif"><br></span></div><div><span style="color:rgb(34,34,34);font-family:arial,sans-serif">公司地址：<wbr>深圳市南山区科技园科技南十二道长虹科技大厦1404室－<wbr>1408室<br><br></span><span style="color:rgb(34,34,34);font-family:Arial,Helvetica,sans-serif">愉快工作、共创快乐游戏家园。</span></div></font></div></div></div></div><div><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><span><div><br><br>--</div><div>深圳市风林火山电脑技术有限公司</div><div><br></div><div>综合管理部：黄婉滢</div><div><br></div><div>公司网址：<a href="https://www.fenglgo.com/" style="color:rgb(17,85,204)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710686169356000&amp;usg=AOvVaw1EZyG5GYyV2Mbs0pwr8a1c">https://www.fenglgo.com/</a><br></div><div><br></div></span><div style="color:rgb(34,34,34)">电子邮件：<a href="mailto:huangwanying@basecity.com" style="color:rgb(17,85,204)" target="_blank">huangwanying@basecity.com</a></div><span><div><br></div><div><div>联系电话：0755－86367337&nbsp; &nbsp; &nbsp;&nbsp;公司传真：0755－86367337 &nbsp; &nbsp; 邮编：518057<br></div><font face="arial, helvetica, sans-serif" color="#0000ff"><div><span style="color:rgb(34,34,34);font-family:arial,sans-serif"><br></span></div><div><span style="color:rgb(34,34,34);font-family:arial,sans-serif">公司地址：<wbr>深圳市南山区科技园科技南十二道长虹科技大厦1404室－<wbr>1408室<br><br></span><span style="color:rgb(34,34,34);font-family:Arial,Helvetica,sans-serif">愉快工作、共创快乐游戏家园。</span><span style="color:rgb(34,34,34);font-family:arial,sans-serif"><br></span></div></font></div></span></div></div></div></div><div class="yj6qo"></div><div class="adL"></div></div>`;
    var gameDesignOnlineCeShiContent = `<div id=":1v1" class="a3s aiL "><div dir="ltr"><div dir="ltr">尊敬的${receiver}${sex}：：&nbsp;</div><div dir="ltr"><br><div>您好，非常高兴地通知您，经过我们的职位意向的沟通和确认，<wbr>诚挚邀请您参加游戏3D设计师岗位测试！<wbr>届时我们会按照约定向您发送测试题目。具体事宜如下：<br><br>职位：游戏设计师</div><div>时间：${interviewDateTimeStr}</div><div>联系人：黄女士<br>联系电话：0755-86367337、13662376462<br><div><br>风林火山职位面试通关流程：<span style="background-color:transparent">岗位招聘我们是认真负责的，</span><span style="background-color:transparent">期待您对<wbr>职位发展有更清晰的判断和计划，全流程完成时间预计2~</span><span style="background-color:transparent">3周：</span></div><div><span style="background-color:transparent"><br></span></div><div>关卡1—上机测试：<wbr>游戏设计师上机测试题侧重美术设计基础能力的考量，<wbr>完成时间120分钟。<br><br>关卡2—HR面试：HR面试则偏重行为面试和应变性问题。<wbr>目的是加深双方的了解，我们希望您真诚地表达自己，<wbr>切勿为了所谓“标准答案”违背自己的内心想法。<br><br>关卡3—综合测试题：模拟项目，<wbr>通过项目实际成果和完成质量考察您的专业能力。<wbr>综合测试是整个招聘流程中最重要的一项，<wbr>关系到您是否可以加入我们，请务必认真对待哦！<br><br>关卡4—大Boss综合面试：公司CEO和您的最终面谈，<wbr>如果通关，加入我们一起把游戏产品做到极致吧！<br><br>企业介绍（<a href="https://www.fenglgo.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710686315485000&amp;usg=AOvVaw2dnPjYv3Bg-KI6IIzCo_FS">https://www.fenglgo.com/</a>）<wbr>：</div><div>其疾如风、其徐如林、侵掠如火、不动如山——风林火山，源于《<wbr>孙子兵法》。<wbr>深圳市风林火山电脑技术有限公司于1996年8月成立，<wbr>是国家高新技术企业，<wbr>也是深圳软件园首批入驻的优秀企业和新一代互联网产业园首批入驻<wbr>企业。我们专注于互联网在线棋牌类游戏，集研发、运营为一体。<div>作为一家互联网游戏公司，我们认真对待每一个候选人，<wbr>选拔真正优秀的人才，我们的工作极具挑战性，<wbr>但同时会给您带来很大的成长。我们期待您聪明爱思考，热爱工作，<wbr>注重效率。响应式组织的团队管理理念，<wbr>期待有职业追求的您加入我们。</div><div><br>我们的产品<br><ol><li style="margin-left:15px">已上线游戏18款，同时提供移动端及PC端服务。（<wbr>可登陆产品官网了解详情，“黄金岛”为公司产品运营平台，<wbr>旗下所有产品均为自主研发）。</li><li style="margin-left:15px">公司游戏注册用户7000万以上，接近100,<wbr>000在线玩家同时竞技。</li><li style="margin-left:15px">公司营收平稳增长，近十年利润保持稳定上升。&nbsp;</li></ol>我们的团队<br><ol><li style="margin-left:15px">技术团队沉淀十余年，985/211院校比例大于60%。</li><li style="margin-left:15px">良好的晋升机制，员工平均任职年限超过3年，稳定性好。</li><li style="margin-left:15px">关注新员工培养计划，完善的导师制，并为导师提供丰厚激励机制。</li><li style="margin-left:15px">注重效率，团队每月加班率少于4%，四点半下班。</li></ol>我们的技术<br><ol><li style="margin-left:15px">全3D场景游戏开发，打造最华丽的棋牌游戏。</li><li style="margin-left:15px">客户端技术范围涵盖引擎架构、编辑器插件开发、游戏视觉开发、<wbr>业务逻辑开发等。</li><li style="margin-left:15px">服务器使用Clojure语言开发，挑战精简优雅的极致。</li><li style="margin-left:15px">敏捷团队管理，体验飞一般的开发感。</li></ol>我们的福利<br><ol><li style="margin-left:15px">提供良好的办公体验，为所有员工配备Mac电脑和独立健身房。</li><li style="margin-left:15px">每日提供员工午餐。</li><li style="margin-left:15px">每月组织团建活动，每年两次团体马拉松活动，带您游遍全国山水。</li><li style="margin-left:15px">零食饮料无限量供应，水果，下午茶这些都是必须的。</li><li style="margin-left:15px">项目绩效季度回报，让员工享受公司经营成果。</li><li style="margin-left:15px">季度加薪评估机制。</li><li style="margin-left:15px">六险一金，婚育礼金，节日礼金、生日礼品、年度体检。</li></ol><div>了解更多关于我司企业文化及招聘信息，<wbr>请扫描下放二维码关注风林火山公司公众号。</div><div><img src="https://mail.google.com/mail/u/0?ui=2&amp;ik=80fd3a0a05&amp;attid=0.1&amp;permmsgid=msg-a:r4913348760620776233&amp;th=18e47b33346c893f&amp;view=fimg&amp;fur=ip&amp;sz=s0-l75-ft&amp;attbid=ANGjdJ8sfgKiUzWXmn95zHFy8AvkFp7z5yj86vPpSaWPbs8x1aDa5syXMPgZ043oxv6JPC8stb7IyuLkkiGw06s7134kFeCOwFHSHID-x0MtX1o9DFqHRVuNh3JiVUI&amp;disp=emb&amp;realattid=ii_18e12b121d3cb971f161" alt="image.png" width="258" height="258" data-image-whitelisted="" class="CToWUd" data-bit="iit"></div></div></div></div></div><div><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><span><div><br><br>--</div><div>深圳市风林火山电脑技术有限公司</div><div><br></div><div>综合管理部：黄婉滢</div><div><br></div><div>公司网址：<a href="https://www.fenglgo.com/" style="color:rgb(17,85,204)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710686315485000&amp;usg=AOvVaw2dnPjYv3Bg-KI6IIzCo_FS">https://www.fenglgo.com/</a><br></div><div><br></div></span><div style="color:rgb(34,34,34)">电子邮件：<a href="mailto:huangwanying@basecity.com" style="color:rgb(17,85,204)" target="_blank">huangwanying@basecity.com</a></div><span><div><br></div><div><div>联系电话：0755－86367337&nbsp; &nbsp; &nbsp;&nbsp;公司传真：0755－86367337 &nbsp; &nbsp; 邮编：518057<br></div><font face="arial, helvetica, sans-serif" color="#0000ff"><div><span style="color:rgb(34,34,34);font-family:arial,sans-serif"><br></span></div><div><span style="color:rgb(34,34,34);font-family:arial,sans-serif">公司地址：<wbr>深圳市南山区科技园科技南十二道长虹科技大厦1404室－<wbr>1408室<br><br></span><span style="color:rgb(34,34,34);font-family:Arial,Helvetica,sans-serif">愉快工作、共创快乐游戏家园。</span><span style="color:rgb(34,34,34);font-family:arial,sans-serif"><br></span></div></font></div></span></div></div></div></div><div class="yj6qo"></div><div class="adL"></div></div>`;

    var HRContent1 =`<div id=":2gp" class="a3s aiL "><div class="adM"></div><div dir="ltr">   尊敬的${receiver}${sex}：<br><div>    您好。非常高兴地通知您：您的笔试考核已通过，<wbr>根据我们收到的结果，    您在笔试中表现出色，特别注意到了您解决问题的能力，    因此我们相信您将在未来取得更大的成功。再次恭喜您！<br><br>现诚邀您邀请参加<span>HR</span><span>面试</span>！具体事宜如下：<div>     职位：${position}<br>时间：${interviewDateTimeStr}</div><div>     地址：深圳市南山区高新南一道长虹科技大厦1404-<wbr>1408室【附近地铁站：高新园D出口；附近公交站：大冲】<br>联系人：黄女士<br>联系电话：0755-86367337、13662376462</div><br>在<span>面试</span>前，    我们希望您能通过邮件回复您在接下来<span>面试</span>中最关心的问题。    这样可以让我们更好地了解您的需求。例如，    您想在<span>HR</span><span>面试</span>时询问公司的工作制度，    在专业<span>面试</span>时了解部门目前的工作现状。我们非常注重您的反馈，    因此请在<b>${answerDateTimeStr}</b>前邮件回复您在接下来的<span>面试</span>中最关心的问题。</div><p>我们希望在面试时通过回答这些问题，更好地为您提供<span>面试</span>体验。我<wbr>们将针对您所关心的问题，提供更为详细的解答。同时，我们也希望<wbr>通过<span>面试</span>，更好地了解您的职业需求和期望，期待着您的回复，<wbr>我们将会为您提供最佳的<span>面试</span>体验！</p><p>不仅如此，在接下来的<span>面试</span>中，我们也希望了解您的个人背景和职业<wbr>规划。我们相信每个人都有独特的故事和经验，这些也是我们在招聘<wbr>过程中所看重的。因此，如果您有任何与职业发展相关的经验或成就<wbr>，也可以在<span>面试</span>中尽情和我们分享。</p><p>另外，<span>面试</span>是一个双向的过程，也是您了解公司和职位的机会。如果<wbr>您有任何疑问或想了解更多信息，也欢迎在<span>面试</span>中向我们提出。我们<wbr>将尽最大的努力为您解答。</p><p>最后，非常感谢您对我们公司的关注和支持，期待与您在<span>面试</span>中相见<wbr>！<br><br></p></div><div><br></div><div>      --<br></div><div>      深圳市风林火山电脑技术有限公司</div><div><br>综合管理部：黄婉滢</div><div><br>公司网址：<a href="https://www.fenglgo.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710681439523000&amp;usg=AOvVaw21pLuQdlYq2_B3FWgh5kTl">https://www.fenglgo.com/</a></div><div><br>电子邮件：<a href="mailto:huangwanying@basecity.com" target="_blank">huangwanying@basecity.com</a></div><div><br>联系电话/公司传真：0755-86367337&nbsp;&nbsp;</div><div><br>公司地址：深圳市南山区科技园南十二道长虹科技大厦1404-      1408室</div><div><br>愉快工作、共创快乐游戏家园！</div><div class="yj6qo"></div><div class="adL"></div></div>`;
    //todo 修改
    var HRContent2 =`<div id=":2gp" class="a3s aiL "><div class="adM"></div><div dir="ltr">   尊敬的${receiver}${sex}：<br><div>    您好。非常高兴地通知您：您的首轮考核已通过，<wbr>根据我们收到的结果，    您在笔试中表现出色，特别注意到了您解决问题的能力，    因此我们相信您将在未来取得更大的成功。再次恭喜您！<br><br>现诚邀您邀请参加<span>HR</span><span>面试</span>！具体事宜如下：<div>     职位：${position}<br>时间：${interviewDateTimeStr}</div><div>     地址：深圳市南山区高新南一道长虹科技大厦1404-<wbr>1408室【附近地铁站：高新园D出口；附近公交站：大冲】<br>联系人：黄女士<br>联系电话：0755-86367337、13662376462</div><br>在<span>面试</span>前，    我们希望您能通过邮件回复您在接下来<span>面试</span>中最关心的问题。    这样可以让我们更好地了解您的需求。例如，    您想在<span>HR</span><span>面试</span>时询问公司的工作制度，    在专业<span>面试</span>时了解部门目前的工作现状。我们非常注重您的反馈，    因此请在<b>${answerDateTimeStr}</b>前邮件回复您在接下来的<span>面试</span>中最关心的问题。</div><p>我们希望在面试时通过回答这些问题，更好地为您提供<span>面试</span>体验。我<wbr>们将针对您所关心的问题，提供更为详细的解答。同时，我们也希望<wbr>通过<span>面试</span>，更好地了解您的职业需求和期望，期待着您的回复，<wbr>我们将会为您提供最佳的<span>面试</span>体验！</p><p>不仅如此，在接下来的<span>面试</span>中，我们也希望了解您的个人背景和职业<wbr>规划。我们相信每个人都有独特的故事和经验，这些也是我们在招聘<wbr>过程中所看重的。因此，如果您有任何与职业发展相关的经验或成就<wbr>，也可以在<span>面试</span>中尽情和我们分享。</p><p>另外，<span>面试</span>是一个双向的过程，也是您了解公司和职位的机会。如果<wbr>您有任何疑问或想了解更多信息，也欢迎在<span>面试</span>中向我们提出。我们<wbr>将尽最大的努力为您解答。</p><p>最后，非常感谢您对我们公司的关注和支持，期待与您在<span>面试</span>中相见<wbr>！<br><br></p></div><div><br></div><div>      --<br></div><div>      深圳市风林火山电脑技术有限公司</div><div><br>综合管理部：黄婉滢</div><div><br>公司网址：<a href="https://www.fenglgo.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fenglgo.com/&amp;source=gmail&amp;ust=1710681439523000&amp;usg=AOvVaw21pLuQdlYq2_B3FWgh5kTl">https://www.fenglgo.com/</a></div><div><br>电子邮件：<a href="mailto:huangwanying@basecity.com" target="_blank">huangwanying@basecity.com</a></div><div><br>联系电话/公司传真：0755-86367337&nbsp;&nbsp;</div><div><br>公司地址：深圳市南山区科技园南十二道长虹科技大厦1404-      1408室</div><div><br>愉快工作、共创快乐游戏家园！</div><div class="yj6qo"></div><div class="adL"></div></div>`;
    var contents = {
        '游戏开发工程师': {
            '笔试': gameDevBiShiContent,
            '专业面试': gameDevZhuanYeMianShiContent,
            'HR面试':HRContent1,
        },
        '游戏用户工程师':{
            '笔试': gameUserBiShiContet,
            '专业面试': gameUserZhuanYeMianShiContet,
            'HR面试':HRContent1,
        },
        '游戏设计工程师':{
            '线下测试': gameDesignOfflineCeShiContent,
            '线上测试': gameDesignOnlineCeShiContent,
            'HR面试':HRContent2,
        }
    }
    const positionContent = contents[position]
    if (positionContent === null){
        return '';
    }
    return  contents[position][interviewTyp];
}

function sendMailOfHtml(receivers, subject, htmlContent) {
    MailApp.sendEmail(receivers, subject, '', {htmlBody: htmlContent});
}

function isEmpty(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
    } else {
        return false;
    }
}

function isInValidDate(date) {
    return date instanceof Date && isNaN(date.getTime())
}

var successColor = '#90EE90'; // green color
var failColor = '#FF0000';

function setResMsg(rowIndex, resetShouldSend, sendResult, color) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    if (resetShouldSend == 1) {
        sheet.getRange(rowIndex + 1, indexConfig.confirmSend + 1).setValue('')
    }
    sheet.getRange(rowIndex + 1, indexConfig.sendResult + 1).setValue(sendResult)
    sheet.getRange(rowIndex + 1, 1, 1, sheet.getLastColumn()).setBackground(color)
}

function judgeCanSend(row) {
    for (j = 0; j <= 7; j++) {
        if (isEmpty(row[j])) {
            return true
        }
    }
    return false;
}

function sendSheet() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var range = SpreadsheetApp.getActive().getDataRange(); // 获取工作表中的所有数据范围
    var values = range.getValues(); // 获取所有单元格的值
    for (var i = 1; i < values.length; i++) {
        sendRow(values[i])
    }
}
function getTitleByInterviewTyp(interviewTyp ){
    var title = ''
    switch (interviewTyp){
        case '笔试':
            title = `笔试`;
            break;
        case 'hr面试':
        case 'HR面试':
            title = `面试`
            break;
        case '专业面试':
            title = `专业面试`
            break;
        case '线上测试':
        case '线下测试':
        case '测试':
            title = `测试`
            break;
    }
    return title;
}
function sendRow(value) {
    var row = values[i];
    var receiver = row[indexConfig.name];
    var sex = row[indexConfig.sex];
    var emailAddress = row[indexConfig.eamilAddress];
    var interviewDateTime = new Date(row[indexConfig.interviewTime]);
    // setResMsg(i,0,'',successColor)
    if (isInValidDate(interviewDateTime)) {
        // setResMsg(i,0,'',successColor)
        setResMsg(i, 0, `时间：${getDateTimeFormat(new Date())} 发送失败，面试时间格式错误`, failColor)
    }

    var interviewDateTimeStr = getDateTimeFormat(interviewDateTime);
    console.log(interviewDateTimeStr)
    var position = row[indexConfig.position];
    var interviewTyp = row[indexConfig.interviewTyp];
    var interviewAddress = row[indexConfig.interviewAddress];
    var shouldSend = row[indexConfig.confirmSend];
    if (shouldSend === '1') {
        var skip = judgeCanSend(row)
        if (skip) {
            console.log('第' + i + '行有必填列未填写，该行邮件无法发送');
            setResMsg(i, 0, `时间：${getDateTimeFormat(new Date())} 发送失败,有空列`, failColor)
            return;
        }

        var emailTitle = getTitleByInterviewTyp(interviewTyp);
        if(emailTitle===''){
            console.log('第' + i + '行interviewTyp错误，该行邮件无法发送,interviewTyp='+interviewTyp);
            setResMsg(i, 0, `时间：${getDateTimeFormat(new Date())} 发送失败,interviewTyp错误`, failColor)
            return;
        }
        emailTitle = '深圳市风林火山电脑技术有限公司'+emailTitle+'邀请（收到请回复，谢谢）'
        var htmlContent =  getEmailHtml(position,interviewTyp,receiver, sex, interviewDateTimeStr, interviewAddress)

        if (htmlContent === '') {
            console.log(`content 为空,请检查,htmlContent=${htmlContent},emailTitle=${emailTitle}`)
            setResMsg(i, 0, `时间：${getDateTimeFormat(new Date())} 发送失败`, failColor)
        }
        try {
            sendMailOfHtml(emailAddress, emailTitle, htmlContent)
        } catch (error) {
            console.log(`发送邮件错误,请检查`)
            setResMsg(i, 0, `时间：${getDateTimeFormat(new Date())} 发送失败 ${error}`, failColor)
            return;
        }
        setResMsg(i, 1, `时间：${getDateTimeFormat(new Date())} 发送成功`, successColor)
    }
}

function test() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var range = SpreadsheetApp.getActive().getDataRange(); // 获取工作表中的所有数据范围
    var values = range.getValues(); // 获取所有单元格的值
    for (var i = 1; i < values.length; i++) {
        var row = values[i];
        var receiver = row[indexConfig.name];
        var sex = row[indexConfig.sex];
        var emailAddress = row[indexConfig.eamilAddress];
        var interviewDateTime = new Date(row[indexConfig.interviewTime]);
        // setResMsg(i,0,'',successColor)
        if (isInValidDate(interviewDateTime)) {
            // setResMsg(i,0,'',successColor)
            setResMsg(i, 0, `时间：${getDateTimeFormat(new Date())} 发送失败，面试时间格式错误`, failColor)
            continue;
        }

        var interviewDateTimeStr = getDateTimeFormat(interviewDateTime);
        console.log(interviewDateTimeStr)
        var position = row[indexConfig.position];
        var interviewTyp = row[indexConfig.interviewTyp];
        var interviewAddress = row[indexConfig.interviewAddress];
        var shouldSend = row[indexConfig.confirmSend];
        if (shouldSend == '1') {
            var skip = judgeCanSend(row)
            if (skip) {
                console.log('第' + i + '行有必填列未填写，该行邮件无法发送');
                setResMsg(i, 0, `时间：${getDateTimeFormat(new Date())} 发送失败,有空列`, failColor)
                continue
            }
            var htmlContent = ''
            var emailTitle = ''
            if (interviewTyp == '笔试') {
                emailTitle = `深圳市风林火山电脑技术有限公司笔试邀请（收到请回复，谢谢）`
                var durationContent = '游戏开发工程师笔试题侧重工作场景开放式考量，<wbr>完成时间90分钟。'
                if (position === '游戏开发工程师') {
                    durationContent = '游戏开发工程师笔试题侧重工作场景开放式考量，<wbr>完成时间90分钟。'
                } else if (position === '游戏用户工程师') {
                    durationContent = '游戏用户工程师笔试题侧重工作场景开放式考量，<wbr>完成时间60分钟。'
                }
                htmlContent = getWriteExaminationContent(receiver, sex, position, interviewDateTimeStr, interviewAddress, durationContent);
            } else if (interviewTyp == 'hr面试' || interviewTyp == 'HR面试') {
                emailTitle = `深圳市风林火山电脑技术有限公司HR面试邀请（收到请回复，谢谢）`
                htmlContent = getHrInterviewContent(receiver, sex, position, interviewDateTimeStr, interviewAddress);
            } else if (interviewTyp == '专业面试') {
                emailTitle = `深圳市风林火山电脑技术有限公司专业面试邀请（收到请回复，谢谢）`
                if (position === '游戏开发工程师') {
                    htmlContent = getDevProfessionalInterviewContent(receiver, sex, position, interviewDateTimeStr, interviewAddress);
                } else {
                    htmlContent = getUserProfessionalInterviewContent(receiver, sex, position, interviewDateTimeStr, interviewAddress);
                }

//       var htmlContent = '';
// var emailTitle = '';
// var durationContent = ''; // 初始化durationContent变量

// // 根据面试类型设置emailTitle，并且根据职位设置durationContent
// switch (interviewTyp) {
//   case '笔试':
//     emailTitle = `深圳市风林火山电脑技术有限公司笔试邀请（收到请回复，谢谢）`;
//     // 由于游戏开发工程师的处理逻辑是默认的，我们可以将其作为默认逻辑处理
//     durationContent = position === '游戏用户工程师'
//       ? '游戏用户工程师笔试题侧重工作场景开放式考量，完成时间60分钟。'
//       : '游戏开发工程师笔试题侧重工作场景开放式考量，完成时间90分钟。';
//     htmlContent = getWriteExaminationContent(receiver, sex, position, interviewDateTimeStr, interviewAddress, durationContent);
//     break;
//   case 'hr面试':
//   case 'HR面试':
//     emailTitle = `深圳市风林火山电脑技术有限公司HR面试邀请（收到请回复，谢谢）`;
//     htmlContent = getHrInterviewContent(receiver, sex, position, interviewDateTimeStr, interviewAddress);
//     break;
//   case '专业面试':
//     emailTitle = `深圳市风林火山电脑技术有限公司专业面试邀请（收到请回复，谢谢）`;
//     htmlContent = position === '游戏开发工程师'
//       ? getDevProfessionalInterviewContent(receiver, sex, position, interviewDateTimeStr, interviewAddress)
//       : getUserProfessionalInterviewContent(receiver, sex, position, interviewDateTimeStr, interviewAddress);
//     break;
// }

                if (htmlContent == '' || emailTitle == '') {
                    console.log(`content null,请检查,htmlContent=${htmlContent},emailTitle=${emailTitle}`)
                    setResMsg(i, 0, `时间：${getDateTimeFormat(new Date())} 发送失败`, failColor)
                }
            } else {
                setResMsg(i, 0, `时间：${getDateTimeFormat(new Date())} 发送失败,笔试/面试类型错误`, failColor);
                continue;
            }
            try {
                sendMailOfHtml(emailAddress, emailTitle, htmlContent)
            } catch (error) {
                console.log(`发送邮件错误,请检查`)
                setResMsg(i, 0, `时间：${getDateTimeFormat(new Date())} 发送失败 ${error}`, failColor)
                continue;
            }
            setResMsg(i, 1, `时间：${getDateTimeFormat(new Date())} 发送成功`, successColor)
        }
    }
}