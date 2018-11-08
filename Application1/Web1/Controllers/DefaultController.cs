using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Web1.Controllers
{
    class Geography
    {
        public string Name { get; set; }
        public int ID { get; set; }
    }

    [Route("api/[Controller]")]
    public class DefaultController : Controller
    {
        List<Geography> geography = new List<Geography>();

        public IActionResult Index()
        {
            geography.Add(new Geography() { ID = 1, Name = "Surendra" });
            geography.Add(new Geography() { ID = 2, Name = "GE02" });
            return new JsonResult(geography);
        }
    }
}