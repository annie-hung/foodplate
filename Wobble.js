var i=0;
var app = new Vue({
          el: '#app',
          data : {
            id:'',
            login:true,
            status:'擺盤',
            Chosed_game:false,
            Chosed_shoppnig:false,
            Chosed_home:false,
            Chosed_voting:false,
            Chosed_person_inf:false,
            Chosed_tableware:false,
            Chosed_doily:false,
            Chosed_staple_food:false,
            Chosed_decoration:false,
            Chosed_side_dish:false,
            Chosed_sauce:false,
            Chosed_dessert:false,
            stand:0,
            total:0,
            star_pg:0,
            end_pg:8,
            market:{},
            room:{},
            works:{},
            rule:true,
            vote_work_1:'',
            vote_work_2:'',
            outcome:[],
            revise:false,
            person_inf:{
              headPicture:[],
              name:'test01',
              money:1000000,
              avg:3,
              have_soruce:{
                            tableware:[
                              {name:'tableware(1)',money:1000,url:'img_source/have_soruce/tableware/tableware(1).png',chosed:false},
                              {name:'tableware(2)',money:1000,url:'img_source/have_soruce/tableware/tableware(2).png',chosed:false},
                              {name:'tableware(3)',money:1000,url:'img_source/have_soruce/tableware/tableware(3).png',chosed:false},
                              {name:'tableware(4)',money:1000,url:'img_source/have_soruce/tableware/tableware(4).png',chosed:false},
                              {name:'tableware(5)',money:1000,url:'img_source/have_soruce/tableware/tableware(5).png',chosed:false}
                            ],
                            doily:[
                              {name:'doily(1)',money:1000,url:'img_source/have_soruce/doily/doily(1).png',chosed:false},
                              {name:'doily(2)',money:1000,url:'img_source/have_soruce/doily/doily(2).png',chosed:false},
                              {name:'doily(3)',money:1000,url:'img_source/have_soruce/doily/doily(3).png',chosed:false},
                              {name:'doily(4)',money:1000,url:'img_source/have_soruce/doily/doily(4).png',chosed:false},
                              {name:'doily(5)',money:1000,url:'img_source/have_soruce/doily/doily(5).png',chosed:false},
                              {name:'doily(6)',money:1000,url:'img_source/have_soruce/doily/doily(6).png',chosed:false},
                              {name:'doily(7)',money:1000,url:'img_source/have_soruce/doily/doily(7).png',chosed:false},
                              {name:'doily(8)',money:1000,url:'img_source/have_soruce/doily/doily(8).png',chosed:false}
                            ],
                            staple_food:[
                              {name:'staple_food(1)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(1).png',chosed:false},
                              {name:'staple_food(2)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(2).png',chosed:false},
                              {name:'staple_food(3)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(3).png',chosed:false},
                              {name:'staple_food(4)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(4).png',chosed:false},
                              {name:'staple_food(5)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(5).png',chosed:false},
                              {name:'staple_food(6)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(6).png',chosed:false},
                              {name:'staple_food(7)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(7).png',chosed:false},
                              {name:'staple_food(8)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(8).png',chosed:false},
                              {name:'staple_food(9)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(9).png',chosed:false},
                              {name:'staple_food(10)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(10).png',chosed:false},
                              {name:'staple_food(11)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(11).png',chosed:false},
                              {name:'staple_food(12)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(12).png',chosed:false},
                              {name:'staple_food(13)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(13).png',chosed:false},
                              {name:'staple_food(14)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(14).png',chosed:false},
                              {name:'staple_food(15)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(15).png',chosed:false},
                              {name:'staple_food(16)',money:1000,url:'img_source/have_soruce/staple_food/staple_food(16).png',chosed:false}
                            ],
                            decoration:[
                              {name:'decoration(1)',money:1000,url:'img_source/have_soruce/decoration/decoration(1).png',chosed:false},
                              {name:'decoration(2)',money:1000,url:'img_source/have_soruce/decoration/decoration(2).png',chosed:false},
                              {name:'decoration(3)',money:1000,url:'img_source/have_soruce/decoration/decoration(3).png',chosed:false},
                              {name:'decoration(4)',money:1000,url:'img_source/have_soruce/decoration/decoration(4).png',chosed:false},
                              {name:'decoration(5)',money:1000,url:'img_source/have_soruce/decoration/decoration(5).png',chosed:false},
                              {name:'decoration(6)',money:1000,url:'img_source/have_soruce/decoration/decoration(6).png',chosed:false},
                              {name:'decoration(7)',money:1000,url:'img_source/have_soruce/decoration/decoration(7).png',chosed:false},
                              {name:'decoration(8)',money:1000,url:'img_source/have_soruce/decoration/decoration(8).png',chosed:false},
                              {name:'decoration(9)',money:1000,url:'img_source/have_soruce/decoration/decoration(8).png',chosed:false}
                            ],
                            side_dish:[
                              {name:'side_dish(1)',money:1000,url:'img_source/have_soruce/side_dish/side_dish(1).png',chosed:false},
                              {name:'side_dish(2)',money:1000,url:'img_source/have_soruce/side_dish/side_dish(2).png',chosed:false},
                              {name:'side_dish(3)',money:1000,url:'img_source/have_soruce/side_dish/side_dish(3).png',chosed:false}
                            ],
                            sauce:[
                              {name:'sauce(1)',money:1000,url:'img_source/have_soruce/sauce/sauce(1).png',chosed:false},
                              {name:'sauce(2)',money:1000,url:'img_source/have_soruce/sauce/sauce(2).png',chosed:false},
                              {name:'sauce(3)',money:1000,url:'img_source/have_soruce/sauce/sauce(3).png',chosed:false},
                              {name:'sauce(4)',money:1000,url:'img_source/have_soruce/sauce/sauce(4).png',chosed:false},
                              {name:'sauce(5)',money:1000,url:'img_source/have_soruce/sauce/sauce(5).png',chosed:false},
                              {name:'sauce(6)',money:1000,url:'img_source/have_soruce/sauce/sauce(6).png',chosed:false},
                              {name:'sauce(7)',money:1000,url:'img_source/have_soruce/sauce/sauce(7).png',chosed:false},
                              {name:'sauce(8)',money:1000,url:'img_source/have_soruce/sauce/sauce(8).png',chosed:false},
                              {name:'sauce(1)',money:1000,url:'img_source/have_soruce/sauce/sauce(1).png',chosed:false},
                              {name:'sauce(2)',money:1000,url:'img_source/have_soruce/sauce/sauce(2).png',chosed:false},
                              {name:'sauce(3)',money:1000,url:'img_source/have_soruce/sauce/sauce(3).png',chosed:false},
                              {name:'sauce(4)',money:1000,url:'img_source/have_soruce/sauce/sauce(4).png',chosed:false},
                              {name:'sauce(5)',money:1000,url:'img_source/have_soruce/sauce/sauce(5).png',chosed:false},
                              {name:'sauce(6)',money:1000,url:'img_source/have_soruce/sauce/sauce(6).png',chosed:false},
                              {name:'sauce(7)',money:1000,url:'img_source/have_soruce/sauce/sauce(7).png',chosed:false},
                              {name:'sauce(8)',money:1000,url:'img_source/have_soruce/sauce/sauce(8).png',chosed:false},
                              {name:'sauce(9)',money:1000,url:'img_source/have_soruce/sauce/sauce(9).png',chosed:false},
                              {name:'sauce(10)',money:1000,url:'img_source/have_soruce/sauce/sauce(10).png',chosed:false},
                              {name:'sauce(11)',money:1000,url:'img_source/have_soruce/sauce/sauce(11).png',chosed:false},
                              {name:'sauce(12)',money:1000,url:'img_source/have_soruce/sauce/sauce(12).png',chosed:false},
                              {name:'sauce(13)',money:1000,url:'img_source/have_soruce/sauce/sauce(13).png',chosed:false},
                              {name:'sauce(14)',money:1000,url:'img_source/have_soruce/sauce/sauce(14).png',chosed:false},
                              {name:'sauce(15)',money:1000,url:'img_source/have_soruce/sauce/sauce(15).png',chosed:false},
                              {name:'sauce(16)',money:1000,url:'img_source/have_soruce/sauce/sauce(16).png',chosed:false},
                              {name:'sauce(17)',money:1000,url:'img_source/have_soruce/sauce/sauce(17).png',chosed:false},
                              {name:'sauce(18)',money:1000,url:'img_source/have_soruce/sauce/sauce(18).png',chosed:false},
                              {name:'sauce(19)',money:1000,url:'img_source/have_soruce/sauce/sauce(19).png',chosed:false},
                              {name:'sauce(20)',money:1000,url:'img_source/have_soruce/sauce/sauce(20).png',chosed:false},
                              {name:'sauce(21)',money:1000,url:'img_source/have_soruce/sauce/sauce(21).png',chosed:false},
                              {name:'sauce(22)',money:1000,url:'img_source/have_soruce/sauce/sauce(22).png',chosed:false},
                              {name:'sauce(23)',money:1000,url:'img_source/have_soruce/sauce/sauce(23).png',chosed:false},
                              {name:'sauce(24)',money:1000,url:'img_source/have_soruce/sauce/sauce(24).png',chosed:false}
                            ],
                            dessert:[
                              {name:'dessert(1)',money:1000,url:'img_source/have_soruce/dessert/dessert(1).png',chosed:false},
                              {name:'dessert(2)',money:1000,url:'img_source/have_soruce/dessert/dessert(2).png',chosed:false},
                              {name:'dessert(3)',money:1000,url:'img_source/have_soruce/dessert/dessert(3).png',chosed:false},
                              {name:'dessert(4)',money:1000,url:'img_source/have_soruce/dessert/dessert(4).png',chosed:false},
                              {name:'dessert(5)',money:1000,url:'img_source/have_soruce/dessert/dessert(5).png',chosed:false},
                              {name:'dessert(6)',money:1000,url:'img_source/have_soruce/dessert/dessert(6).png',chosed:false},
                              {name:'dessert(7)',money:1000,url:'img_source/have_soruce/dessert/dessert(7).png',chosed:false},
                              {name:'dessert(8)',money:1000,url:'img_source/have_soruce/dessert/dessert(8).png',chosed:false},
                              {name:'dessert(9)',money:1000,url:'img_source/have_soruce/dessert/dessert(9).png',chosed:false},
                              {name:'dessert(10)',money:1000,url:'img_source/have_soruce/dessert/dessert(10).png',chosed:false},
                              {name:'dessert(11)',money:1000,url:'img_source/have_soruce/dessert/dessert(11).png',chosed:false},
                              {name:'dessert(12)',money:1000,url:'img_source/have_soruce/dessert/dessert(12).png',chosed:false},
                              {name:'dessert(13)',money:1000,url:'img_source/have_soruce/dessert/dessert(13).png',chosed:false},
                              {name:'dessert(14)',money:1000,url:'img_source/have_soruce/dessert/dessert(14).png',chosed:false},
                              {name:'dessert(15)',money:1000,url:'img_source/have_soruce/dessert/dessert(15).png',chosed:false},
                              {name:'dessert(16)',money:1000,url:'img_source/have_soruce/dessert/dessert(16).png',chosed:false},
                              {name:'dessert(17)',money:1000,url:'img_source/have_soruce/dessert/dessert(17).png',chosed:false}
                            ]
                              },
              historyWork: {
                          }
                  }
            },
            computed:{
             
            },
            methods: {
                default_list:function (){
                  this.Chosed_tableware=false
                  this.Chosed_doily=false
                  this.Chosed_staple_food=false
                  this.Chosed_decoration=false
                  this.Chosed_side_dish=false
                  this.Chosed_sauce=false
                  this.Chosed_dessert=false
                },
                default_menu:function (){
                  this.Chosed_game=false;
                  this.Chosed_shoppnig=false;
                  this.Chosed_home=false;
                  this.Chosed_voting=false;
                  this.Chosed_person_inf=false;
                },
                login_check:function (){
                  this.login=false;
                  this.default_list()
                  this.Chosed_tableware=true
                },
                visit:function (){
                  this.login=false;
                  this.Chosed_game=true;
                  this.person_inf.name=prompt("請輸入名稱","");
                  this.default_list()
                  this.Chosed_tableware=true
                },
                game:function(){
                  /*this.status='擺盤';*/
                  this.default_menu()
                  this.Chosed_game=true
                  this.default_list()
                  this.Chosed_tableware=true
                  this.page(Object.getOwnPropertyNames(this.room).length-1);
                },
                shoppnig:function(){
                   this.status='商店';
                   this.default_menu()
                   this.Chosed_shoppnig=true
                   this.default_list()
                   this.Chosed_tableware=true
                   this.page(Object.getOwnPropertyNames(this.room).length-1);
                },
                home:function(){
                  this.status='大廳';
                  this.default_menu()
                  this.Chosed_home=true
                  this.page(Object.getOwnPropertyNames(this.room).length-1);
                },
                vote:function (){
                  this.status='評分';
                  this.default_menu()
                  this.Chosed_voting=true;
                  this.works=Object.getOwnPropertyNames(this.room);
                },
                personInformation:function(){
                  this.status='個人資料';
                  this.default_menu()
                  this.Chosed_person_inf=true
                },
                tableware:function(){
                  this.id='tableware';
                  this.default_list()
                  this.Chosed_tableware=true;
                  this.page(this.person_inf.have_soruce.tableware.length);
                },
                doily:function(){
                  this.id='doily';
                  this.default_list()
                  this.Chosed_doily=true;
                  this.page(this.person_inf.have_soruce.doily.length);
                },
                staple_food:function(){
                  this.id='staple_food';
                  this.default_list()
                  this.Chosed_staple_food=true;
                  this.page(this.person_inf.have_soruce.staple_food.length);
                },
                decoration:function(){
                  this.id='decoration';
                  this.default_list()
                  this.Chosed_decoration=true;
                  this.page(this.person_inf.have_soruce.decoration.length);
                },
                side_dish:function(){
                  this.id='side_dish';
                  this.default_list()
                  this.Chosed_side_dish=true;
                  this.page(this.person_inf.have_soruce.side_dish.length);
                },
                sauce:function(){
                  this.id='sauce';
                  this.default_list()
                  this.Chosed_sauce=true;
                  this.page(this.person_inf.have_soruce.sauce.length);
                },
                dessert:function(){
                  this.id='dessert';
                  this.default_list()
                  this.Chosed_dessert=true;
                  this.page(this.person_inf.have_soruce.dessert.length);
                },
                previous:function(){
                  this.stand--;
                  if(this.stand<=0){
                    alert("First Page");
                    this.stand=1;
                  }else{
                    this.star_pg=this.star_pg-9;
                    this.end_pg=this.end_pg-9;
                    this.item=this.item.substring(0, this.item.length-1);
                  }
                },
                next:function(){
                  this.stand++;
                  if(this.stand>this.total){
                    alert("Last Page");
                    this.stand=this.total;

                  }else{
                    this.star_pg=this.star_pg+9;
                    this.end_pg=this.end_pg+9;
                    this.item=this.item+(this.stand-1);
                  }
                },
                page:function(data){
                  this.star_pg=0;
                  this.end_pg=8;
                  if(data>0){
                    this.stand=1;
                  }else{
                    this.stand=0;
                  }
                  var rule = Math.ceil(data/9);
                  if(this.stand==0){
                    this.total=0;
                  }else{
                      if(rule<1){
                      this.total=1;
                    }else{
                      this.total=rule;
                    }
                  }
                },
                random:function(){
                  var random1 = Math.floor(Math.random()*(this.works.length-1))+1;
                  var random2 = Math.floor(Math.random()*(this.works.length-1))+1;
                  while(random1==random2){
                    random2 = Math.floor(Math.random()*(this.works.length-1))+1;
                  }
                  var str1 ='';
                  var str2 ='';
                  this.vote_work_1=str1;
                  this.vote_work_2=str2;
                      },
                vote_star:function(){
                    this.rule=false;
                    this.stand=1;
                    this.total=3;
                    this.random();
                },
                voting:function(work){
                  this.random();
                  this.outcome[this.stand]=work;
                  this.stand++;
                  //console.log(this.outcome);
                  if(this.stand>=4){
                    alert("評分完成");
                    this.rule=true;
                  }
                },
                rename:function(){
                  this.revise=true;
                },
                store:function(){
                  this.revise=false;
                },
                drop:function(e){
                  var dothis = new dragObject(document.getElementById(e.id));
                  console.log(e.id)
                },
                crear_item:function(e,u){
                  i=i+1;
                  var Odiv=document.createElement("div");  
                  Odiv.className="soruce_item";
                  Odiv.id=e.id+i
                  Odiv.style.backgroundImage='url(\'' + u + '\')'
                  Odiv.style.position="relative";
                 
                  //console.log(Odiv)
                  //建立div的css樣式
                  //Odiv.id=”box”;                            //建立div的id為box
                  //Odiv.className=”Box”;                    //div的class為Box
                          //在div內建立一個span
                  document.getElementById('show_game').appendChild(Odiv);        //在body內建立一個div
                   Odiv.click=this.drop(Odiv);
                }
              }
          });