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
@RequestMapping(value = "/service/serviceHot")
public class ServiceHotController extends BaseController {
    @Autowired
    protected IDictAO dictAO;

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    @ResponseBody
    public Object dropDict(@RequestBody Map map) {
  		return BizConnecter.getBizData("612016", JsonUtils.mapToJson(map),
              Object.class);
	}
    
    @RequestMapping(value = "/up", method = RequestMethod.POST)
    @ResponseBody
    public Object upService(@RequestBody Map map) {
    	map.put("action","1");
    	map.put("updater", this.getSessionUser().getUserName());
  		return BizConnecter.getBizData("612019", JsonUtils.mapToJson(map),
              Object.class);
	}
    
    @RequestMapping(value = "/down", method = RequestMethod.POST)
    @ResponseBody
    public Object downService(@RequestBody Map map) {
    	map.put("action","0");
    	map.put("updater", this.getSessionUser().getUserName());
  		return BizConnecter.getBizData("612019", JsonUtils.mapToJson(map),
              Object.class);
	}


    @RequestMapping(value = "/page", method = RequestMethod.GET)
    @ResponseBody
    public Object queryDictPage(@RequestParam Map<String,String> map) {
  	    return BizConnecter.getBizData("612030", JsonUtils.mapToJson(map),
              Object.class);
    }
}
