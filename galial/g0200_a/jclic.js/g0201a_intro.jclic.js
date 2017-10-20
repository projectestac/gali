if(JClicObject){JClicObject.projectFiles["g0201a_intro.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"g0201a_intro\" version=\"0.1.3\">\r\n <settings>\r\n  <title>g0201a intro</title>\r\n  <revision description=\"created\" date=\"5/14/03\" />\r\n  <descriptors />\r\n  <skin file=\"gali.xml\" />\r\n </settings>\r\n <sequence>\r\n  <item id=\"start\" name=\"Inici\">\r\n   <jump action=\"STOP\" id=\"back\" />\r\n  </item>\r\n  <item id=\"presenta\" name=\"Presentació\">\r\n   <jump action=\"STOP\" id=\"forward\" />\r\n  </item>\r\n </sequence>\r\n <activities>\r\n  <activity class=\"@panels.InformationScreen\" name=\"Inici\" code=\"\">\r\n   <description>\r\n    <p>Pantalla d'espera mentre es carrega el paquet d'activitats</p>\r\n   </description>\r\n   <messages>\r\n    <cell type=\"initial\">\r\n     <style>\r\n      <font family=\"Arial\" size=\"17\" bold=\"true\" />\r\n      <color background=\"0x804000\" />\r\n     </style>\r\n    </cell>\r\n   </messages>\r\n   <settings margin=\"8\" report=\"false\">\r\n    <container bgColor=\"0xC0C0C0\">\r\n     <image name=\"i01-img/textura.gif\" tiled=\"true\" />\r\n     <counters time=\"false\" actions=\"false\" score=\"false\" />\r\n    </container>\r\n    <window bgColor=\"0xC0C0C0\" transparent=\"true\" border=\"false\" />\r\n   </settings>\r\n   <cells rows=\"1\" cols=\"2\" cellWidth=\"157.0\" cellHeight=\"133.0\" border=\"false\">\r\n    <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n     <color background=\"0xFFFFFF\" />\r\n    </style>\r\n    <shaper class=\"@Rectangular\" cols=\"2\" rows=\"1\" />\r\n    <cell txtAlign=\"left,middle\" imgAlign=\"left,middle\" image=\"gali.gif\" />\r\n    <cell txtAlign=\"left,bottom\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Arial\" size=\"17\" bold=\"true\" />\r\n      <color foreground=\"0x003366\" background=\"0xFFFFFF\" />\r\n     </style>\r\n     <p>QUI SÓ? COM SÓ?</p>\r\n     <p>(Iniciació)</p>\r\n    </cell>\r\n   </cells>\r\n  </activity>\r\n  <activity class=\"@panels.InformationScreen\" name=\"Presentació\" code=\"\">\r\n   <description>\r\n    <p>Pantalla d'espera mentre es carrega el paquet d'activitats</p>\r\n   </description>\r\n   <messages>\r\n    <cell type=\"initial\">\r\n     <style>\r\n      <font family=\"Arial\" size=\"17\" bold=\"true\" />\r\n      <color background=\"0x804000\" />\r\n     </style>\r\n    </cell>\r\n   </messages>\r\n   <settings margin=\"8\" report=\"false\">\r\n    <container bgColor=\"0xC0C0C0\">\r\n     <image name=\"img/textura.gif\" tiled=\"true\" />\r\n     <counters time=\"false\" actions=\"false\" score=\"false\" />\r\n    </container>\r\n    <window bgColor=\"0xC0C0C0\" transparent=\"true\" border=\"false\" />\r\n   </settings>\r\n   <cells rows=\"1\" cols=\"1\" border=\"false\" image=\"menu.gif\">\r\n    <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n     <color background=\"0xFFFFFF\" />\r\n    </style>\r\n    <shaper class=\"@Holes\" cols=\"1\" rows=\"1\">\r\n     <shape comment=\"0\">rectangle:0.020767,0.592025,0.926518,0.06135</shape>\r\n     <shape comment=\"1\">rectangle:0.015974,0.665644,0.934505,0.06135</shape>\r\n     <shape comment=\"2\">rectangle:0.01278,0.745399,0.9377,0.055215</shape>\r\n     <shape comment=\"3\">rectangle:0.015974,0.815951,0.93131,0.064417</shape>\r\n     <shape comment=\"4\">rectangle:0.015974,0.895706,0.932907,0.064417</shape>\r\n    </shaper>\r\n    <cell>\r\n     <media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0201a.pac\" params=\"g0201a.jclic\" />\r\n    </cell>\r\n    <cell>\r\n     <media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0202a.pac\" params=\"g0202a.jclic\" />\r\n    </cell>\r\n    <cell>\r\n     <media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0203a.pac\" params=\"g0203a.jclic\" />\r\n    </cell>\r\n    <cell>\r\n     <media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0204a.pac\" params=\"g0204a.jclic\" />\r\n    </cell>\r\n    <cell>\r\n     <media type=\"RUN_CLIC_PACKAGE\" level=\"1\" file=\"g0205a.pac\" params=\"g0205a.jclic\" />\r\n    </cell>\r\n   </cells>\r\n  </activity>\r\n </activities>\r\n <mediaBag>\r\n  <media name=\"gali.gif\" file=\"gali.gif\" animated=\"false\" />\r\n  <media name=\"i01-img/textura.gif\" file=\"i01_img_textura.gif\" animated=\"false\" />\r\n  <media name=\"img/intro.gif\" file=\"img_intro.gif\" animated=\"false\" />\r\n  <media name=\"img/textura.gif\" file=\"img_textura.gif\" animated=\"false\" />\r\n  <media name=\"menu.gif\" file=\"menu.gif\" animated=\"false\" />\r\n  <media name=\"gali.xml\" file=\"gali.xml\" />\r\n </mediaBag>\r\n</JClicProject>\r\n\r\n";}