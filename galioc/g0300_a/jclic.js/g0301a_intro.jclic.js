if(JClicObject){JClicObject.projectFiles["g0300_a/jclic/g0301a_intro.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"g0301a_intro\" version=\"0.1.3\"><settings><title>g0301a intro<\/title><revision description=\"created\" date=\"5/14/03\" /><descriptors /><skin file=\"gali.xml\" /><\/settings><sequence><item id=\"start\" name=\"Inici\"><jump action=\"RETURN\" id=\"back\" /><\/item><item id=\"presenta\" name=\"Presentació\" delay=\"1\"><jump action=\"RETURN\" id=\"forward\" /><\/item><\/sequence><activities><activity class=\"@panels.InformationScreen\" name=\"Inici\" code=\"\"><description><p>Pantalla d'espera mentre es carrega el paquet d'activitats<\/p><\/description><messages><cell type=\"initial\"><style><font family=\"Arial\" size=\"17\" bold=\"true\" /><color background=\"0x804000\" /><\/style><\/cell><\/messages><settings margin=\"8\" report=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"i01-img/textura.gif\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xC0C0C0\" transparent=\"true\" border=\"false\" /><\/settings><cells rows=\"1\" cols=\"2\" cellWidth=\"157.0\" cellHeight=\"133.0\" border=\"false\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Rectangular\" cols=\"2\" rows=\"1\" /><cell txtAlign=\"left,middle\" imgAlign=\"left,middle\" image=\"gali.gif\"><media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0101a.pac\" params=\"g0101a.jclic\" /><\/cell><cell txtAlign=\"left,bottom\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><font family=\"Arial\" size=\"17\" bold=\"true\" /><color foreground=\"0x003366\" background=\"0xFFFFFF\" /><\/style><p>QUINA HORA EI? QUIN DIA ÈM? QUÉ M'AGRADE?<\/p><p>(Iniciacion)<\/p><\/cell><\/cells><\/activity><activity class=\"@panels.InformationScreen\" name=\"Presentació\" code=\"\"><description><p>Pantalla d'espera mentre es carrega el paquet d'activitats<\/p><\/description><messages><cell type=\"initial\"><style><font family=\"Arial\" size=\"17\" bold=\"true\" /><color background=\"0x804000\" /><\/style><\/cell><\/messages><settings margin=\"8\" report=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"img/textura.gif\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xC0C0C0\" transparent=\"true\" border=\"false\" /><\/settings><cells rows=\"1\" cols=\"1\" border=\"false\" image=\"Imagen 5.png\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Holes\" cols=\"1\" rows=\"1\"><shape comment=\"0\">rectangle:0.016641,0.585139,0.930408,0.058824<\/shape><shape comment=\"1\">rectangle:0.012103,0.668731,0.933434,0.049536<\/shape><shape comment=\"2\">rectangle:0.022693,0.739938,0.93646,0.052632<\/shape><shape comment=\"3\">rectangle:0.016641,0.823529,0.937973,0.055728<\/shape><shape comment=\"4\">rectangle:0.024206,0.904025,0.940998,0.086687<\/shape><\/shaper><cell><media type=\"RUN_CLIC_PACKAGE\" level=\"1\" params=\"g0501a.jclic\" /><\/cell><cell><media type=\"RUN_CLIC_PACKAGE\" level=\"1\" params=\"g0302a.jclic\" /><\/cell><cell><media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0303a.pac\" params=\"g0303a.jclic\" /><\/cell><cell><media type=\"RUN_CLIC_PACKAGE\" level=\"1\" params=\"g0304a.jclic\" /><\/cell><cell><media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0305a.pac\" params=\"g0305a.jclic\" /><\/cell><\/cells><\/activity><\/activities><mediaBag><media name=\"gali.gif\" file=\"gali.gif\" /><media name=\"i01-img/textura.gif\" file=\"i01_img_textura.gif\" /><media name=\"img/textura.gif\" file=\"img_textura.gif\" /><media name=\"Imagen 5.png\" file=\"imagen_5.png\" /><media name=\"gali.xml\" file=\"gali.xml\" /><\/mediaBag><\/JClicProject>\r\n";}