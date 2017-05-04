
var map = new BMap.Map("container");          // 创建地图实例  
var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
map.centerAndZoom(point, 15);  

// var map = new BMap.Map("container");
// var point = new BMap.Point(116.404, 39.915);
// map.centerAndZoom(point, 15);
// window.setTimeout(function() {
//   map.panTo(new BMap.Point(116.409, 39.918));
// }, 2000);

map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());   

