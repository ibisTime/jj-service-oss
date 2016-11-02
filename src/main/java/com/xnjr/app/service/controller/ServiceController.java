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
@RequestMapping(value = "/service/service")
public class ServiceController extends BaseController {
    @Autowired
    protected IDictAO dictAO;

    @RequestMapping(value = "/illegal", method = RequestMethod.POST)
    @ResponseBody
    public Object editDict(@RequestBody Map map) {
    	map.put("dealer", this.getSessionUser().getUserName());
  		return BizConnecter.getBizData("612017", JsonUtils.mapToJson(map),
              Object.class);
	}

    @RequestMapping(value = "/page", method = RequestMethod.GET)
    @ResponseBody
    public Object queryDictPage(@RequestParam Map<String,String> map) {
  	    return BizConnecter.getBizData("612030", JsonUtils.mapToJson(map),
              Object.class);
    }

    @RequestMapping(value = "/detail", method = RequestMethod.GET)
    @ResponseBody
    public Object queryDictDetail(@RequestParam Map<String,String> map) {
    	map.put("id", map.get("code"));
  	    return BizConnecter.getBizData("612031", JsonUtils.mapToJson(map),
              Object.class);
    }
    
    @RequestMapping(value = "/hot", method = RequestMethod.POST)
    @ResponseBody
    public Object hotService(@RequestBody Map map) {
    	map.put("dealer", this.getSessionUser().getUserName());
  		return BizConnecter.getBizData("612018", JsonUtils.mapToJson(map),
              Object.class);
	}
}
