import { EXAMPLE_API_URL } from '@/constants/apis';
import { CommonResponse } from '@/types/common';
import HttpClient from '@/utils/axios-config';

export class Example {
  public exampleFunction() {
    const url = EXAMPLE_API_URL.API_URL;
    return HttpClient.get<null, CommonResponse>(url);
  }

  public exampleFunction2(params: any) {
    const url = EXAMPLE_API_URL.API_URL;
    return HttpClient.post<null, CommonResponse>(url, params);
  }
}
