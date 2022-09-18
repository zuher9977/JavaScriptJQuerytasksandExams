var user="zuher"
var pass="123"

        function login1(){
            debugger
            var txtUsername=document.getElementById("txtUsername").value
            var txtPassword=document.getElementById("txtPassword").value
            if(txtUsername.length === 0 && txtPassword.length === 0){
                var hide1=document.getElementById("showmsg")
                hide1.setAttribute("class","showBox")
            }
            else{
                var user1=document.getElementById("txtUsername").value
                localStorage.setItem("Username",user1)
                window.location="home.html"
            }

        }

        function hidePassAndUser(){
            
            var hide1=document.getElementById("showmsg")
            hide1.setAttribute("class","hideBox")
        }

        function hidePleaseEnterUS(h){
            
            var hide=h.parentNode
            hide.setAttribute("class","hideBox")
        }

        function login(){
            
            var txtUsername=document.getElementById("txtUsername").value
            var txtPassword=document.getElementById("txtPassword").value



            if(txtUsername == user && txtPassword == pass){
                window.location="home.html"
                x=5
            }
            else if(txtUsername.length === 0 && txtPassword.length === 0){
                var hide1=document.getElementById("showmsg")
                hide1.setAttribute("class","showBox")
            }
            else{
                var hide1=document.getElementById("showmsg")
                hide1.setAttribute("class","showBox")
            }
        }

        function hideUnwanted(){
            document.getElementById("DivShoppingList").style.display="none"
            var xyz1=document.getElementsByClassName("xyz")
            for(var i=0;i<xyz1.length;i++){
                xyz1[i].style.display="none"
            }
            debugger
            var loc=localStorage.getItem("Username")
            var username=document.getElementById("username")
            username.textContent = "hello "+loc;

        }

        function changeColorOfMenu(x){
            
            var li=document.getElementsByClassName("liClick")
            var a=document.getElementsByTagName("a")
            if (x.onclick){
                for(var i=0;i<li.length;i++){
                    li[i].classList.remove("liClick");
                    x.parentNode.setAttribute("class","liClick")
                    for(var s=0;s<a.length;s++)
                    a[s].removeAttribute("style")
                    x.setAttribute("style","color: white")
                }
            }
        }



        function showlist(y){
            

            var ul=document.getElementsByTagName("ul")[1]
            ul.style.display="block";
        }

        function movetocart(yy){


            document.getElementById("DivShoppingList").style.display="block"
            debugger
            var item=yy.parentNode.parentNode.parentNode.parentNode
            
            var img_src=item.getElementsByClassName("mainimgItem")[0].src
            var img1=document.createElement("img")
            img1.setAttribute("src",img_src)
            img1.style.height = '50px';
            img1.style.width = '50px';
            

            var item_name=item.getElementsByClassName("headerItem")[0].innerText
            var node_item_name=document.createTextNode(item_name)
            
            
        
            var price_value=item.getElementsByClassName("headerpriceItem")[0].innerText
            var node_price_value=document.createTextNode(price_value)
            
                var checkbox=document.createElement("input")
                checkbox.setAttribute("type","checkbox")
                var tr=document.createElement("tr")

                
                var typeel=item.getElementsByClassName("EL")
                if (typeel.length==1){
                    tr.setAttribute("Class","EL")
                }
                debugger
                var typepr=item.getElementsByClassName("PR")
                if (typepr.length==1){
                    tr.setAttribute("Class","PR")
                }

                var td=document.createElement("td")
                tr.appendChild(td)
                td.appendChild(checkbox)

                var td1=document.createElement("td")
                tr.appendChild(td1)
                td1.appendChild(img1)

                var td2=document.createElement("td")
                tr.appendChild(td2)
                td2.appendChild(node_item_name)

                var td3=document.createElement("td")
                tr.appendChild(td3)
                td3.appendChild(node_price_value)


                var tab=document.getElementById("tableItems")
                tab.appendChild(tr)

                

        }

        function check(i){
            
            if (i.checked==true)
            {
                document.getElementById("DiscountPart").style.display="block"
            }
            if (i.checked==false)
            {
                document.getElementById("DiscountPart").style.display="none"
            }

        }

        function signout(){
            window.location="login.html"
        }

        function checkshoplist(s){
            
            if (s.checked==true){
                var tab=document.getElementById("tableItems")
                var checkb=tab.getElementsByTagName("input")
                for (i=0;i<checkb.length;i++){
                    checkb[i].checked=true;
                }

            }
            if (s.checked==false){
                var tab=document.getElementById("tableItems")
                var checkb=tab.getElementsByTagName("input")
                for (i=0;i<checkb.length;i++){
                    checkb[i].checked=false;
                }

            }
        }

        function deletebutton(){
            
            var tab=document.getElementById("tableItems")
            var checkb=tab.getElementsByTagName("input")
            for (i=0;i<checkb.length;i++){
                    if(checkb[i].checked==true){
                        var v=checkb[i].parentNode.parentNode
                        v.remove()
                        i--
                        if (checkb.length==0){
                            document.getElementById("DivShoppingList").style.display="none"
                        }
                    }
                }
        }


            function Buy(){
                debugger
                var discountCode=document.getElementById("txtDiscount").value
                var first2=discountCode.substr(0,2)
                if (first2=="PR"){
                    var LAST=discountCode.substr(2,2)
                    var tab=document.getElementById("tableItems")
                    var tr=tab.getElementsByClassName("PR")
                        for (var i=0;i<tr.length;i++){
                            var price=tr[i].getElementsByTagName("td")[3].innerText
                            var priceSP=price.substr(0,3)
                            var pricedesc=priceSP- (priceSP*(LAST /100 ))
                            var pricechange=tr[i].getElementsByTagName("td")[3]
                            pricechange.textContent = pricedesc + "JD"
                        }           

                }
                if (first2=="EL"){
                    var LAST=discountCode.substr(2,2)
                    var tab=document.getElementById("tableItems")
                    var tr=tab.getElementsByClassName("EL")
                        for (var i=0;i<tr.length;i++){
                            var price=tr[i].getElementsByTagName("td")[3].innerText
                            var priceSP=price.substr(0,3)
                            var pricedesc=priceSP- (priceSP*(LAST /100 ))
                            var pricechange=tr[i].getElementsByTagName("td")[3]
                            pricechange.textContent = pricedesc + "JD"
                    }   

                }

            }

            