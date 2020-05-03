const NodeMediaServer = require('node-media-server');

const config = {
	rtmp: {
		port: 1935,
		chunk_size: 60000,
		gop_cache: true,
		ping: 30,
		ping_timeout: 60
	},
	http: {
		port: 8000,
		allow_origin: '*'
	},
	relay: {
		ffmpeg: '/usr/local/bin/ffmpeg',
		tasks: [
			{
				app: 'robin',
				mode: 'static',
				edge: 'rtsp://robin:cam@10.0.0.31:554/live/ch1',
				name: 'cam',
				rtsp_transport : 'tcp' //['udp', 'tcp', 'udp_multicast', 'http']
			}
		]
	}
};

var nms = new NodeMediaServer(config)
nms.run();
