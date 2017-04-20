function clicktoshow(obj){
	$('.cont img').eq(obj).click(function(){
		var path = $('.cont img').eq(obj).attr('src');
		$('.cont').after("<div class='show'><img src='' alt='' class='pic' ></div>");
		$('.pic').attr('src',path);
		$('.cont').css('filter','blur(8px)');
		$('.show').click(function(){
			$('.show').fadeOut(function(){
			    $('.show').remove();
			    $('.cont').css('filter','blur(0px)');
			})
			$('.show').fadeOut(2000);
		})
	})
}		
var piclist=document.querySelectorAll('.cont img');
for(var i=0;i<piclist.length;i++)
	$('.cont img').eq(i).on('click',clicktoshow(i));
// ————————————————————————————————————————————————————
function changeword(obj){
	$('.bar div').eq(obj).click(function(){
		$('.bar div').css('background','transparent');
		$('.bar div').eq(obj).css('background','#ccc');
		$('.mes span').text(obj+1);
	})
}

var barlist=document.querySelectorAll('.cont img');
$('.bar div').eq(0).css('background','#ccc');
for(var i=0;i<barlist.length;i++)
	$('.bar div').eq(i).on('click',changeword(i));



// ————————————————————————————————————————————————————
$('.box input').click(function(){
	$('.box .smallbox').append("<div class='item'><div class='num'>3</div><div class='del'>Delete</div></div>");
	var itemlist=document.querySelectorAll('.box .smallbox .item');
	var tot=itemlist.length;
	$('.box .smallbox .item .num').eq(tot-1).text(tot);
	$('.box .smallbox .item .del').eq(tot-1).on('click',dele)
})

function autoindex(){
	var itemlist=document.querySelectorAll('.box .smallbox .item');
	var tot=itemlist.length;
	for(var i=0;i<tot;i++)
		$('.box .smallbox .item .num').eq(i).text(i+1);
}

function dele(){
	$(this).parent().remove();
	autoindex();
}

var item_all=document.querySelectorAll('.box .smallbox .item');
var all=item_all.length;

for(var i=0;i<all;i++)
	$('.box .smallbox .item .del').eq(i).on('click',dele)
