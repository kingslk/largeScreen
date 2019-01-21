export default {
  serverName: '龙宫服务区',
  serverTem: '10℃',
  serverWeatherName: '晴',
  serverYear: '2018年',
  serverSaveWork: 60,
  carRest: {
    northRest: 220,
    sorthRest: 220,
    northFlow: 3000,
    sorthFlow: 3000
  },
  parkingLot: {
    used: 80,
    rest: 20
  },
  pieOption: {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center',
            formatter: '{c}'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' }
        ]
      }
    ]
  }
};
