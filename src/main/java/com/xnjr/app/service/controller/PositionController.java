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
@RequestMapping(value = "/service/position")
public class PositionController extends BaseController {
    @Autowired
    protected IDictAO dictAO;
    
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
    
    @RequestMapping(value = "/illegal", method = RequestMethod.POST)
    @ResponseBody
    public Object illegalDict(@RequestBody Map map) {
    	map.put("dealer", this.getSessionUser().getUserName());
    	map.put("code", map.get("code"));
  		return BizConnecter.getBizData("612083", JsonUtils.mapToJson(map),
              Object.class);
	}
    
    @RequestMapping(value = "/hot", method = RequestMethod.POST)
    @ResponseBody
    public Object hotDict(@RequestBody Map map) {
    	map.put("dealer", this.getSessionUser().getUserName());
    	map.put("orderNo", "0");
  		return BizConnecter.getBizData("612084", JsonUtils.mapToJson(map),
              Object.class);
	}
}
