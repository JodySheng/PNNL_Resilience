// 引入所需的模块
import React from 'react';
import YouTube from 'react-youtube';

// 组件
function VideoPlayer() {
  // 设置YouTube视频的选项
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // 这里可以设置一些参数，如自动播放、显示控制栏等。详细参考YouTube的API文档。
    },
  };

  // 定义视频ID
  const videoId = 'dMXdmQ_G1BM'; // 替换成你要嵌入的YouTube视频的ID

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default VideoPlayer;