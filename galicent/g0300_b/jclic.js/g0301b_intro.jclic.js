if(JClicObject){JClicObject.projectFiles["g0301b_intro.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"g0301b_intro\" version=\"0.1.3\">\r\n <settings>\r\n  <title>g0301b intro</title>\r\n  <revision description=\"created\" date=\"5/14/03\" />\r\n  <descriptors />\r\n  <skin file=\"gali.xml\" />\r\n </settings>\r\n <sequence>\r\n  <item id=\"start\" name=\"Inici\">\r\n   <jump action=\"STOP\" id=\"back\" />\r\n  </item>\r\n  <item id=\"presenta\" name=\"Presentació\" delay=\"1\">\r\n   <jump action=\"STOP\" id=\"forward\" />\r\n  </item>\r\n </sequence>\r\n <activities>\r\n  <activity class=\"@panels.InformationScreen\" name=\"Presentació\" code=\"\">\r\n   <description>\r\n    <p>Pantalla d'espera mentre es carrega el paquet d'activitats</p>\r\n   </description>\r\n   <messages>\r\n    <cell type=\"initial\">\r\n     <style>\r\n      <font family=\"Arial\" size=\"17\" bold=\"true\" />\r\n      <color background=\"0x804000\" />\r\n     </style>\r\n    </cell>\r\n   </messages>\r\n   <settings margin=\"8\" report=\"false\">\r\n    <container bgColor=\"0xC0C0C0\">\r\n     <image name=\"img/textura.gif\" tiled=\"true\" />\r\n     <counters time=\"false\" actions=\"false\" score=\"false\" />\r\n    </container>\r\n    <window bgColor=\"0xC0C0C0\" transparent=\"true\" border=\"false\" />\r\n   </settings>\r\n   <cells rows=\"1\" cols=\"1\" border=\"false\" image=\"menu.gif\">\r\n    <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n     <color background=\"0xFFFFFF\" />\r\n    </style>\r\n    <shaper class=\"@Holes\" cols=\"1\" rows=\"1\">\r\n     <shape comment=\"0\">rectangle:0.019017,0.646104,0.933439,0.048701</shape>\r\n     <shape comment=\"1\">rectangle:0.017433,0.727273,0.935024,0.048701</shape>\r\n     <shape comment=\"2\">rectangle:0.012678,0.805195,0.936609,0.051948</shape>\r\n     <shape comment=\"3\">rectangle:0.011094,0.886364,0.938193,0.055195</shape>\r\n    </shaper>\r\n    <cell>\r\n     <media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0301b.pac\" params=\"g0301b.jclic\" />\r\n    </cell>\r\n    <cell>\r\n     <media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0302b.pac\" params=\"g0302b.jclic\" />\r\n    </cell>\r\n    <cell>\r\n     <media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0303b.pac\" params=\"g0303b.jclic\" />\r\n    </cell>\r\n    <cell>\r\n     <media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0304b.pac\" params=\"g0304b.jclic\" />\r\n    </cell>\r\n   </cells>\r\n  </activity>\r\n  <activity class=\"@panels.InformationScreen\" name=\"Inici\" code=\"\">\r\n   <description>\r\n    <p>Pantalla d'espera mentre es carrega el paquet d'activitats</p>\r\n   </description>\r\n   <messages>\r\n    <cell type=\"initial\">\r\n     <style>\r\n      <font family=\"Arial\" size=\"17\" bold=\"true\" />\r\n      <color background=\"0x804000\" />\r\n     </style>\r\n    </cell>\r\n   </messages>\r\n   <settings margin=\"8\" report=\"false\">\r\n    <container bgColor=\"0xC0C0C0\">\r\n     <image name=\"i01-img/textura.gif\" tiled=\"true\" />\r\n     <counters time=\"false\" actions=\"false\" score=\"false\" />\r\n    </container>\r\n    <window bgColor=\"0xC0C0C0\" transparent=\"true\" border=\"false\" />\r\n   </settings>\r\n   <cells rows=\"1\" cols=\"2\" cellWidth=\"157.0\" cellHeight=\"133.0\" border=\"false\">\r\n    <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n     <color background=\"0xFFFFFF\" />\r\n    </style>\r\n    <shaper class=\"@Rectangular\" cols=\"2\" rows=\"1\" />\r\n    <cell txtAlign=\"left,middle\" imgAlign=\"left,middle\" image=\"gali.gif\">\r\n     <media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0101a.pac\" params=\"g0101a.jclic\" />\r\n    </cell>\r\n    <cell txtAlign=\"left,bottom\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Arial\" size=\"17\" bold=\"true\" />\r\n      <color foreground=\"0x003366\" background=\"0xFFFFFF\" />\r\n     </style>\r\n     <p>QUINA HORA ÉS? QUIN DIA SOM? QUÈ M'AGRADA?</p>\r\n     <p>(Aprofundiment)</p>\r\n    </cell>\r\n   </cells>\r\n  </activity>\r\n </activities>\r\n <mediaBag>\r\n  <media name=\"gali.gif\" file=\"gali.gif\" animated=\"false\" />\r\n  <media name=\"i01-img/textura.gif\" file=\"i01_img_textura.gif\" animated=\"false\" />\r\n  <media name=\"img/intro.gif\" file=\"img_intro.gif\" animated=\"false\" />\r\n  <media name=\"img/textura.gif\" file=\"img_textura.gif\" animated=\"false\" />\r\n  <media name=\"menu.gif\" file=\"menu.gif\" animated=\"false\" />\r\n  <media name=\"gali.xml\" file=\"gali.xml\" />\r\n </mediaBag>\r\n</JClicProject>\r\n\r\n";}