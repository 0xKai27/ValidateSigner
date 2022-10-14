"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.indexRouter = router;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'did-jwt-ethers' });
});
