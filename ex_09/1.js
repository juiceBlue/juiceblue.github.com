
var map = new BMap.Map("myMap");          // 创建地图实例  
var point = new BMap.Point(120.140807,30.255997);  // 创建点坐标  
map.centerAndZoom(point, 15);       
var marker = new BMap.Marker(point);    
map.addOverlay(marker);    
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());
map.setCurrentCity("杭州市");   
map.enableScrollWheelZoom();

var local = new BMap.LocalSearch(map, {
  pageCapacity: 4,
  renderOptions: {
    map: map,
    autoViewport: true,
    panel: "result1"
  }
});
local.searchNearby("宾馆", "西湖景区");
// map.removeOverlay(marker);

// var map2 = new BMap.Map("myMap");          
var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "result2"
  }
});
transit.search("杭州师范大学仓前新校区", "浙江宾馆");

var opts = {
      list:[
           {
            place:{
              width:250,
              height:210,
              title:'杭州师范大学仓前新校区',
            },
            name:'食堂', 
            pos:{
              lng:120.015808,
              lat:30.293661
            },
            mark:null,
            pic:'img/1.jpg'
           },
           {
            place:{
              width:250,
              height:210,
              title:'杭州师范大学仓前新校区',
            },
            name:'操场',
            pos:{
              lng:120.014304,
              lat:30.295134
            },
            mark:null,
            pic:'img/2.jpg'
           },
           {
            place:{
              width:250,
              height:210,
              title:'杭州师范大学仓前新校区',
            },
            name:'博文苑8号楼',
            pos:{
              lng:120.015177,
              lat:30.296378
            },
            mark:null,
            pic:'img/3.jpg'
           },
           {
            place:{
              width:250,
              height:210,
              title:'杭州师范大学仓前新校区',
            },
            name:'博文苑9号楼',
            pos:{
              lng:120.015752,
              lat:30.296518
            },
            mark:null,
            pic:'img/4.jpg'
           },
           {
            place:{
              width:250,
              height:210,
              title:'杭州师范大学仓前新校区',
            },
            name:'恕园11号楼',
            pos:{
              lng:120.019817,
              lat:30.296382
            },
            mark:null,
            pic:'img/5.jpg'
           },
           {
            place:{
              width:250,
              height:210,
              title:'杭州师范大学仓前新校区',
            },
            name:'恕园27号楼',
            pos:{
              lng:120.020352,
              lat:30.297914
            },
            mark:null,
            pic:'img/6.jpg'
           },
           {
            place:{
              width:250,
              height:210,
              title:'杭州师范大学仓前新校区',
            },
            name:'恕园35号楼',
            pos:{
              lng:120.017477,
              lat:30.297988
            },
            mark:null,
            pic:'img/7.jpg'
           },
           {
            place:{
              width:250,
              height:210,
              title:'杭州师范大学仓前新校区',
            },
            name:'教育超市',
            pos:{
              lng:120.01699,
              lat:30.295388
            },
            mark:null,
            pic:'img/8.jpg'
           }
  ]};

var list = opts.list;
for(var i=0;i<list.length;i++){
  list[i].mark= new BMap.Marker(new BMap.Point(list[i].pos.lng, list[i].pos.lat)); 
  map.addOverlay(list[i].mark);
  list[i].mark.id=i;
  list[i].mark.addEventListener('click',function(e){
    var url=list[this.id].pic;
    var pic='<img src="'+url+'" width="100%" height="160"/>'+list[this.id].name
    var infoWindow = new BMap.InfoWindow(pic, list[this.id].place);
    var local = new BMap.Point(e.point.lng, e.point.lat);
    map.openInfoWindow(infoWindow, local);
  })
}