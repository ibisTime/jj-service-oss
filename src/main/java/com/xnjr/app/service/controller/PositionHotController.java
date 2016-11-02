package com.xnjr.app.service.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xnjr.app.controller.BaseController;
import com.xnjr.app.general.ao.IDictAO;
import com.xnjr.app.http.BizConnecter;
import com.xnjr.app.http.JsonUtils;

@Controller
@RequestMapping(value = "/service/positionHot")
public class PositionHotController extends BaseController {
    @Autowired
    protected IDictAO dictAO;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public Object addDict(@RequestBody Map map) {
    	map.put("updater", this.getSessionUser().getUserName());
  		return BizConnecter.getBizData("612081", JsonUtils.mapToJson(map),
              Object.class);
	}

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    @ResponseBody
    public Object dropDict(@RequestBody Map map) {
  		return BizConnecter.getBizData("612082", JsonUtils.mapToJson(map),
              Object.class);
	}

    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    @ResponseBody
    public Object editDict(@RequestBody Map map) {
    	map.put("id", map.get("code"));
    	map.put("updater", this.getSessionUser().getUserName());
  		return BizConnecter.getBizData("612081", JsonUtils.mapToJson(map),
              Object.class);
	}
    
    @RequestMapping(value = "/up", method = RequestMethod.POST)
    @ResponseBody
    public Object upPosition(@RequestBody Map map) {
    	map.put("action","1");
  		return BizConnecter.getBizData("612085", JsonUtils.mapToJson(map),
              Object.class);
	}
    
    @RequestMapping(value = "/down", method = RequestMethod.POST)
    @ResponseBody
    public Object downPosition(@RequestBody Map map) {
    	map.put("action","0");
  		return BizConnecter.getBizData("612085", JsonUtils.mapToJson(map),
              Object.class);
	}


    @RequestMapping(value = "/page", method = RequestMethod.GET)
    @ResponseBody
    public Object queryDictPage(@RequestParam Map<String,String> map) {
  	    return BizConnecter.getBizData("612090", JsonUtils.mapToJson(map),
              Object.class);
    }

    @RequestMapping(value = "/detail", method = RequestMethod.GET)
    @ResponseBody
    public Object queryDictDetail(@RequestParam Map<String,String> map) {
    	map.put("id", map.get("code"));
  	    return BizConnecter.getBizData("612091", JsonUtils.mapToJson(map),
              Object.class);
    }
}
