if(JClicObject){JClicObject.projectFiles["g0400_b/jclic/g0401b_intro.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"g0401b_intro\" version=\"0.1.3\"><settings><title>g0401b intro<\/title><revision description=\"created\" date=\"5/14/03\" /><descriptors /><skin file=\"gali.xml\" /><\/settings><sequence><item id=\"start\" name=\"Inici\"><jump action=\"RETURN\" id=\"back\" /><\/item><item id=\"presenta\" name=\"Presentació\"><jump action=\"RETURN\" id=\"forward\" /><\/item><\/sequence><activities><activity class=\"@panels.InformationScreen\" name=\"Inici\" code=\"\"><description><p>Pantalla d'espera mentre es carrega el paquet d'activitats<\/p><\/description><messages><cell type=\"initial\"><style><font family=\"Arial\" size=\"17\" bold=\"true\" /><color background=\"0x804000\" /><\/style><\/cell><\/messages><settings margin=\"8\" report=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"i01-img/textura.gif\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xC0C0C0\" transparent=\"true\" border=\"false\" /><\/settings><cells rows=\"1\" cols=\"2\" cellWidth=\"157.0\" cellHeight=\"133.0\" border=\"false\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Rectangular\" cols=\"2\" rows=\"1\" /><cell txtAlign=\"left,middle\" imgAlign=\"left,middle\" image=\"gali.gif\"><media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0101a.pac\" params=\"g0101a.jclic\" /><\/cell><cell txtAlign=\"left,bottom\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><font family=\"Arial\" size=\"17\" bold=\"true\" /><color foreground=\"0x003366\" background=\"0xFFFFFF\" /><\/style><p>QUÉ MIMGI? A ON VIUI?<\/p><p>(Apregondiment)<\/p><\/cell><\/cells><\/activity><activity class=\"@panels.InformationScreen\" name=\"Presentació\" code=\"\"><description><p>Pantalla d'espera mentre es carrega el paquet d'activitats<\/p><\/description><messages><cell type=\"initial\"><style><font family=\"Arial\" size=\"17\" bold=\"true\" /><color background=\"0x804000\" /><\/style><\/cell><\/messages><settings margin=\"8\" report=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"img/textura.gif\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xC0C0C0\" transparent=\"true\" border=\"false\" /><\/settings><cells rows=\"1\" cols=\"1\" border=\"false\" image=\"menjar.png\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Holes\" cols=\"1\" rows=\"1\"><shape comment=\"1\">rectangle:0.0128,0.635762,0.9312,0.062914<\/shape><shape comment=\"2\">rectangle:0.0112,0.718543,0.936,0.066225<\/shape><shape comment=\"3\">rectangle:0.0096,0.804636,0.9392,0.059603<\/shape><shape comment=\"4\">rectangle:0.0096,0.884106,0.9344,0.066225<\/shape><\/shaper><cell><media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0401b.pac\" params=\"g0401b.jclic\" /><\/cell><cell><media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0402b.pac\" params=\"g0402b.jclic\" /><\/cell><cell><media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0403b.pac\" params=\"g0403b.jclic\" /><\/cell><cell><media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0404b.pac\" params=\"g0404b.jclic\" /><\/cell><\/cells><\/activity><\/activities><mediaBag><media name=\"gali.gif\" file=\"gali.gif\" /><media name=\"i01-img/textura.gif\" file=\"i01_img_textura.gif\" /><media name=\"img/intro.gif\" file=\"img_intro.gif\" /><media name=\"img/textura.gif\" file=\"img_textura.gif\" /><media name=\"menu.gif\" file=\"menu.gif\" /><media name=\"menjar.png\" file=\"menjar.png\" /><media name=\"gali.xml\" file=\"gali.xml\" /><\/mediaBag><\/JClicProject>\r\n";}